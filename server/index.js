// server/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import applicantRoutes from "./routes/applicants.js";


dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = [process.env.CORS_ORIGIN]
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Connect to MongoDB
const MONGO = process.env.MONGODB_URI;
if (!MONGO) throw new Error("MONGODB_URI not set");
mongoose.connect(MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  });

// Use routes
app.use("/api/applicants", applicantRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

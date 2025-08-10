// server/models/Applicant.js
import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  role: { type: String, enum: ["intern","volunteer"], default: "intern" },
  skills: [String],
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Applicant = mongoose.models.Applicant || mongoose.model("Applicant", applicantSchema);
export default Applicant;

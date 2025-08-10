// server/routes/applicants.js
import express from "express";
import Applicant from "../models/Applicant.js";

const router = express.Router();

// POST create application (public)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, role, skills, message } = req.body;
    if (!name || !email) return res.status(400).json({ error: "name & email required" });
    const applicant = await Applicant.create({ name, email, phone, role, skills, message });
    res.status(201).json(applicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET all applicants (admin) - simple header-based auth
router.get("/", async (req, res) => {
  const adminSecret = req.headers["x-admin-secret"];
  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "unauthorized" });
  }
  const applicants = await Applicant.find().sort({ createdAt: -1 });
  res.json(applicants);
});

export default router;

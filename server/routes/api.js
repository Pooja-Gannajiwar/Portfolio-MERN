const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile");
const Project = require("../models/Project");

/* ================= PROFILE ================= */

// GET profile
router.get("/profile", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

/* ================= PROJECTS ================= */

// GET all projects
router.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// ADD project
router.post("/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// DELETE project
router.delete("/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

// UPDATE project
router.put("/projects/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;

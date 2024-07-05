const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('tasks');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProject = async (req, res) => {
  const { title, description } = req.body;
  try {
    const project = new Project({ title, description });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const project = await Project.findByIdAndUpdate(id, updates, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjectTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id).populate('tasks');
    res.json(project.tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

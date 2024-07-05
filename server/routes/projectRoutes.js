const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject, getProjectTasks } = require('../controllers/projectController');

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id/tasks', getProjectTasks);

module.exports = router;

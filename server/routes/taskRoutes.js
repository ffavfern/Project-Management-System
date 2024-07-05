const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask, addComment } = require('../controllers/taskController');

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.post('/tasks/:id/comments', addComment);

module.exports = router;

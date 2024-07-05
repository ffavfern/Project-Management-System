const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  assignedTo: String,
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  comments: [{ text: String, date: Date }]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

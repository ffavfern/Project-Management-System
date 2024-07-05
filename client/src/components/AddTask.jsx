import  { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tasks', { title, description, assignedTo });
      console.log('Task added:', response.data);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl mb-4">Add Task</h2>
      <div className="mb-4">
        <label htmlFor="task-title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="task-title"
          className="mt-1 p-2 w-full border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="task-description" className="block text-gray-700">Description</label>
        <textarea
          id="task-description"
          className="mt-1 p-2 w-full border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="task-assignedTo" className="block text-gray-700">Assigned To</label>
        <input
          type="text"
          id="task-assignedTo"
          className="mt-1 p-2 w-full border"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default AddTask;

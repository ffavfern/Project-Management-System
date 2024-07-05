import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setAssignedTo(response.data.assignedTo);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/tasks/${id}`, { title, description, assignedTo, status });
      navigate(`/tasks/${id}`);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl mb-4">Edit Task</h2>
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
      <div className="mb-4">
        <label htmlFor="task-status" className="block text-gray-700">Status</label>
        <select
          id="task-status"
          className="mt-1 p-2 w-full border"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Task</button>
    </form>
  );
};

export default EditTask;

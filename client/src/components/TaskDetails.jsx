import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      navigate('/tasks');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl mb-4">{task.title}</h2>
      <p>{task.description}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mt-4">Delete Task</button>
    </div>
  );
};

export default TaskDetails;

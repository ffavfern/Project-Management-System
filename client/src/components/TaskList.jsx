import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error('Fetched data is not an array:', response.data);
        }
      } catch (error) {
        console.error('There was an error fetching the tasks!', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="mb-4 p-4 border rounded-lg shadow">
            <Link to={`/tasks/${task._id}`}>
              <h2 className="text-xl">{task.title}</h2>
              <p>{task.description}</p>
              <p>Assigned to: {task.assignedTo}</p>
              <p>Status: {task.status}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

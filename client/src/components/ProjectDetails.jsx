import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/projects/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl mb-4">{project.title}</h2>
      <p>{project.description}</p>
      <h3 className="text-xl mb-2">Tasks</h3>
      <ul>
        {project.tasks.map(task => (
          <li key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mt-4">Delete Project</button>
    </div>
  );
};

export default ProjectDetails;

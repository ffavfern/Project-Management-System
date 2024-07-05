import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error('Fetched data is not an array:', response.data);
        }
      } catch (error) {
        console.error('There was an error fetching the projects!', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Project List</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id} className="mb-4 p-4 border rounded-lg shadow">
            <Link to={`/projects/${project._id}`}>
              <h2 className="text-xl">{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

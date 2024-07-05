import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/projects/${id}`, { title, description });
      navigate(`/projects/${id}`);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl mb-4">Edit Project</h2>
      <div className="mb-4">
        <label htmlFor="project-title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="project-title"
          className="mt-1 p-2 w-full border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="project-description" className="block text-gray-700">Description</label>
        <textarea
          id="project-description"
          className="mt-1 p-2 w-full border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Project</button>
    </form>
  );
};

export default EditProject;

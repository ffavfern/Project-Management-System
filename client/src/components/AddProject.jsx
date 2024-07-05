import  { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/projects', { title, description });
      console.log('Project added:', response.data);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl mb-4">Add Project</h2>
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
    </form>
  );
};

export default AddProject;


import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col">
      <div className="p-4 flex items-center">
        <div className="text-2xl font-bold">CANDY</div>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-blue-800"><Link to="/">Dashboard</Link></li>
          <li className="p-4 hover:bg-blue-800"><Link to="/projects">Projects</Link></li>
          <li className="p-4 hover:bg-blue-800"><Link to="/tasks">Tasks</Link></li>
          <li className="p-4 hover:bg-blue-800"><Link to="/add-project">Add Project</Link></li>
          <li className="p-4 hover:bg-blue-800"><Link to="/add-task">Add Task</Link></li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="bg-red-500 w-full py-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;

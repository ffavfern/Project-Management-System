import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import EditProject from './components/EditProject';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';
import AddProject from './components/AddProject';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-4 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/projects/edit/:id" element={<EditProject />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/tasks/:id" element={<TaskDetails />} />
              <Route path="/tasks/edit/:id" element={<EditTask />} />
              <Route path="/add-project" element={<AddProject />} />
              <Route path="/add-task" element={<AddTask />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

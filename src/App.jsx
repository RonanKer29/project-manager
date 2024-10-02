import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import ProjectDetail from "./components/ProjectDetail";
import WelcomePage from "./components/WelcomePage";

//* Main App component
function App() {
  const [projects, setProjects] = useState([]); //* State to store projects
  const [showNewProject, setShowNewProject] = useState(false); //* State to show/hide NewProject component
  const [selectedProject, setSelectedProject] = useState(null); //* State to store selected project

  //* Function to add a new project
  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    setShowNewProject(false);
  };

  //* Function to select a project
  const selectProject = (project) => {
    setSelectedProject(project);
  };

  //* Function to delete a project
  const deleteProject = (project) => {
    setProjects((prevProjects) =>
      prevProjects.filter((p) => p.title !== project.title)
    );
    setSelectedProject(null);
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-10">
        <Sidebar
          projects={projects}
          onAddProject={() => setShowNewProject(true)}
          onSelectProject={selectProject}
        />
        {showNewProject ? (
          <NewProject
            onSave={addProject}
            onCancel={() => setShowNewProject(false)}
          />
        ) : selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onDeleteProject={() => deleteProject(selectedProject)}
          />
        ) : (
          <WelcomePage onAddProject={() => setShowNewProject(true)} />
        )}
      </main>
    </>
  );
}

export default App;

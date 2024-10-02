import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import WelcomePage from "./components/WelcomePage";
import { useState } from "react";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [projects, setProjects] = useState([]);
  const [showNewProject, setShowNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
    setShowNewProject(false);
  };

  const selectProject = (project) => {
    setSelectedProject(project);
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
          <ProjectDetail project={selectedProject} />
        ) : (
          <WelcomePage onAddProject={() => setShowNewProject(true)} />
        )}
      </main>
    </>
  );
}

export default App;

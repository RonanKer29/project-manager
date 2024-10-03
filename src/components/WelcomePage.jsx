import React from "react";
import noProjectImage from "../assets/no-projects.png";

const WelcomePage = ({ onAddProject }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <img
        src={noProjectImage}
        alt="project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h1 className="text-xl font-bold">No Projects selected</h1>
      <p>Select a project in the sidebar or create a new one</p>
      <button
        onClick={onAddProject}
        className="px-4 py-2 bg-stone-500 text-white rounded-md hover:bg-stone-600 hover:text-stone-300"
      >
        + Create new Project
      </button>
    </div>
  );
};
export default WelcomePage;

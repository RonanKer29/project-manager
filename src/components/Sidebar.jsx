const Sidebar = ({ projects }) => {
  return (
    <div className="w-1/3 px-8 py-16 md:w-72 bg-gray-800  shadow-lg rounded-r-xl mt-10">
      <h2 className="text-xl font-bold uppercase md:text-xl mb-8 text-stone-200">
        Your Projects
      </h2>

      <button className="bg-gray-700 hover:bg-gray-600 hover:text-stone-200 text-xs md:text-base px-4 py-2 rounded-md space-y-2">
        + Add Project
      </button>

      <ul>
        {/* {projects.map((project, index) => (
          <li key={index}>{project.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Sidebar;

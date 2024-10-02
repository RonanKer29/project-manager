import Task from "./Task";

const ProjectDetail = ({ project, onDeleteProject }) => {
  return (
    <>
      <div className="flex flex-col  p-8 items-start mt-10 ">
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-2">{project.description}</p>
        <p className="text-sm text-gray-600">Due Date: {project.dueDate}</p>
        <div className="border-b py-2 border-gray-500 w-full" />
        <Task />
      </div>
      <div className="my-8 gap-10 mt-10 flex p-8 items-start">
        <button
          onClick={onDeleteProject}
          className="px-4 py-2 bg-stone-500 text-stone-300 rounded-md   "
        >
          Delete Project
        </button>
      </div>
    </>
  );
};
export default ProjectDetail;

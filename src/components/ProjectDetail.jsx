const ProjectDetail = ({ project }) => {
  return (
    <div className="flex flex-col w-full p-8 items-start mt-10 ">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-2">{project.description}</p>
      <p className="text-sm text-gray-600">Due Date: {project.dueDate}</p>
      <div className="border-b border-black">----</div>
    </div>
  );
};
export default ProjectDetail;

import { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <h1 className="font-bold text-xl mb-4">TASKS</h1>
      <div className="gap-4 flex">
        <input
          className="border-stone-400 bg-stone-300 rounded-md"
          type="text"
        />
        <button className="underline">Add task</button>
      </div>
      <div className="">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="flex gap-4 items-center">
              <input type="checkbox" />
              <p>{task}</p>
            </div>
          ))
        ) : (
          <p>No tasks</p>
        )}
      </div>
    </>
  );
};
export default Task;

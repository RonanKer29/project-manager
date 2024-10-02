import { useState } from "react";

//* Task component to manage and display tasks
const Task = () => {
  const [tasks, setTasks] = useState([]); //* State to store tasks

  //* Function to add a new task
  const addTask = () => {
    const task = document.querySelector("input").value;
    if (task) {
      setTasks([...tasks, task]);
      document.querySelector("input").value = "";
    }
  };

  //* Function to remove a task by index
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <section className="mt-8 w-full">
        <h1 className="font-bold text-xl mb-4">TASKS</h1>
        <div className="gap-4 flex">
          <input
            className="bg-stone-200 pb-2 border-b-0 focus:border-b-2 focus:border-stone-700  focus:outline-none"
            type="text"
          />
          <button onClick={addTask} className="underline">
            Add task
          </button>
        </div>
        <div className="mt-6 w-full bg-zinc-100 rounded-sm p-4 ">
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div
                key={index}
                className="flex justify-between gap-4 py-2 items-center"
              >
                <p>{task}</p>
                <button
                  className="mr-4 hover:text-red-600"
                  onClick={() => removeTask(index)}
                >
                  Clear
                </button>
              </div>
            ))
          ) : (
            <p className="py-4">This project does not have any task yet</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Task;

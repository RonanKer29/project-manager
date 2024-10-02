import Input from "./Input.jsx";
import { useState } from "react";

//* NewProject component to create a new project
const NewProject = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState(""); //* State to store project title
  const [description, setDescription] = useState(""); //* State to store project description
  const [dueDate, setDueDate] = useState(""); //* State to store project due date

  //* Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate });
    //* Reset form values
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={handleSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              type="button"
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Description"
            textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default NewProject;

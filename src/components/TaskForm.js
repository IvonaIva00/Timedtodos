// TaskForm.js
import React, { useState } from "react";
import "./TaskForm.css";


const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
    };
    addTask(newTask);
    setTitle("");
  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <label >
       
        <input 
        className="inputs"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button className="button" type="submit">Add Task</button>
      
    </form>
    </div>
  );
};

export default TaskForm;



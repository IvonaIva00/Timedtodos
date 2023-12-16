// Tasks.js
import React, { useState } from "react";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.timestamp}
          </li>
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default Tasks;






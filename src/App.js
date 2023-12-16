// App.js or your main application file
import React from "react";
import Tasks from "././components/Tasks";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="title">Task Manager</h1>
      <Tasks className='tasks' />
    </div>
  );
}

export default App;


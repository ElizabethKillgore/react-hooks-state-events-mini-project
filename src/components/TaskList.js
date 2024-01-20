import React from "react";
import Task from "./Task"

function TaskList( { tasks, deleteTask } ) {
console.log(tasks)
  return (
    <div className="tasks">
      
      {tasks.map((task) =>
      <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask} />)}
    </div>
  );
}

export default TaskList;

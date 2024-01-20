import React, { useState } from "react";

function NewTaskForm( { CATEGORIES, tasks, onTaskFormSubmit }) {

  const [newTaskName, setNewTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("Code")
  
  function handleTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {
       
      text: newTaskName,
      category: taskCategory
    }
    onTaskFormSubmit(newTask)
    console.log(newTask)
  }

  function handleNewTask(e) {
    setNewTaskName(e.target.value)
  }


  function handleTaskCategory(e) {
    setTaskCategory(e.target.value)
  }
  

  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskName} onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleTaskCategory} >
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

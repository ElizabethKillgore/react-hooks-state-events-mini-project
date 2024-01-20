import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTASKS] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  

  function deleteTask(text) {
    const newList = tasks.filter((task) => task.text !==  text )
    setTASKS(newList)
  }

  function handleSelectedButton(clickedCategory) {
    setSelectedCategory(clickedCategory)
  }
  
  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return task 
    } else {
      return task.category === selectedCategory }

    }    
  )
  
  function onTaskFormSubmit(newTask) {
    setTASKS([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelectedButton={handleSelectedButton} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} tasks={tasks} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

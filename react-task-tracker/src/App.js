import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'



const App = () =>
{
  const [showAddForm, setShowAddForm ] = useState(false)
  const [tasks, setTasks] = useState ([])

  useEffect (() => {
    const getSetData = async () => {
      const dataFromServer = await fetchTasks()
      setTasks(dataFromServer)

    }
  getSetData()
  }, [])

  // Fetch data from Server
  const fetchTasks = async ()  => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data

   }

  // Add a new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *100)+1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }
  // function to delete a task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle task reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }
  // on clicking 'ADD' button

  return (
    <div className="container">
      {<Header onAdd={() => setShowAddForm(!showAddForm)} showAdd = {showAddForm}/> }
      {showAddForm &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks onToggle={toggleReminder} tasks={ tasks } onDelete = {deleteTask} />) : ('No more tasks!')}
    </div>
  );
}



export default App;

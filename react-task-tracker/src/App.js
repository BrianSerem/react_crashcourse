import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'



const App = () =>
{
  const [showAddForm, setShowAddForm ] = useState(false)
  const [tasks, setTasks] = useState ([])
  const taskUrl = 'http://localhost:5000/tasks'

  useEffect (() => {
    const getSetData = async () => {
      const dataFromServer = await fetchTasks(taskUrl)
      setTasks(dataFromServer)

    }
  getSetData()
  }, [])

  // Fetch data from Server
  const fetchTasks = async (url)  => {
    const res = await fetch(url)
    const data = await res.json()
    return data

   }

  // Add a new task
  const addTask = async (task) => {

    console.log(task)
    const res = await fetch('http://localhost:5000/tasks',
    {method : 'POST', headers : {'Content-type': 'application/json'}, body:JSON.stringify(task)})
    const newTasks = await res.json()
    setTasks([...tasks, newTasks])
  }
  // function to delete a task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method : 'DELETE', })
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

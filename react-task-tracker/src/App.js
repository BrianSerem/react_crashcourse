import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'



const App = () =>
{
  const [showAddForm, setShowAddForm ] = useState(false)
  const [tasks, setTasks] = useState ([
    {
        'id':1,
        'text': 'take out trash',
        'day': 'Feb 5th 2026 0600Hrs',
        'reminder': true
    },
    {
        'id':2,
        'text': 'go and get car washed',
        'day': 'March 5th 2026 0600Hrs',
        'reminder': false
    },
    {
        'id':3,
        'text': 'go on a date with rose',
        'day': 'April 5th 2026 0600Hrs',
        'reminder': true
    },
    {
        'id':4,
        'text': 'meet business prospects',
        'day': 'May 5th 2026 0600Hrs',
        'reminder': false
    },
    {
        'id':5,
        'text': 'research on crypto',
        'day': 'June 5th 2026 0600Hrs',
        'reminder': true
    },])
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
      {<Header onAdd={() => setShowAddForm(!showAddForm)}/> }
      {showAddForm &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks onToggle={toggleReminder} tasks={ tasks } onDelete = {deleteTask} />) : ('No more tasks!')}
    </div>
  );
}



export default App;

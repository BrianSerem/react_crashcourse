import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";



const App = () =>
{
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

  // function to delete a task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log(id, 'has been deleted')
  }
  // toggle task reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? (<Tasks onToggle={toggleReminder} tasks={ tasks } onDelete = {deleteTask} />) : ('No more tasks!')}
    </div>
  );
}



export default App;

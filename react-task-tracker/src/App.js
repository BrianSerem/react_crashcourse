import Header from "./components/Header";
import Footer from './components/Footer'
import About from "./components/About";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'
import { BrowserRouter as Router, Route } from 'react-router-dom'



const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])
  const taskUrl = 'http://localhost:5000/tasks/'

  useEffect(() => {
    const getSetData = async () => {
      const dataFromServer = await fetchTasks(taskUrl)
      setTasks(dataFromServer)

    }
    getSetData()
  }, [])

  // Fetch data from Server
  const fetchTasks = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data

  }

  const fetchTask = async (id) => {
    const res = await fetch(taskUrl + id)
    const data = await res.json()
    return data

  }

  // Add a new task
  const addTask = async (task) => {

    const res = await fetch(taskUrl,
      { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(task) })
    const newTasks = await res.json()
    setTasks([...tasks, newTasks])
  }




  // Edit existing task
  const editTask = async (task) => {
    const taskToEdit = await fetchTask(task.id)
    
    const updTask = {...taskToEdit, day: task.day, text: task.text}


    const res = await fetch(taskUrl+task.id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map((currenTask) => currenTask.id == task.id ? { ...task, day: data.day, text: data.text } : currenTask))
  }
  // function to delete a task





  const deleteTask = async (id) => {
    await fetch(taskUrl + id, { method: 'DELETE', })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle task reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(taskUrl + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }
  // on clicking 'ADD' button

  return (
    <Router>
      <div className="container">
        {<Header onAdd={() => setShowAddForm(!showAddForm)} showAdd={showAddForm}/>}

        <Route path='/' exact render={() => (
          <>
            {showAddForm && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (<Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) : ('No more tasks!')}

          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}



export default App;

import { useState } from "react"

const AddTask = ({ onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('Please enter a task!')
      return
    }

    onAdd({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)


  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label> Task name</label>
            <input type='text' placeholder='enter task name' value = {text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label> Date and time</label>
            <input type='text' placeholder='enter date and time' value = {day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label> Set reminder</label>
            <input type='checkbox' checked={reminder} value = {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className='btn btn-block' type='submit' value='Save task' />
    </form>
  )
}

export default AddTask

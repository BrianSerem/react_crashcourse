import { useState } from "react"

const AddTask = () => {

  const [text, setText] = useState('')
  const [date, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
        <div className='form-control'>
            <label> Task name</label>
            <input type='text' placeholder='enter task name' value = {text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label> Date and time</label>
            <input type='text' placeholder='enter date and time' value = {date} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label> Set reminder</label>
            <input type='checkbox' value = {text} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className='btn btn-block' type='submit' value='Save task'/>
    </form>
  )
}

export default AddTask

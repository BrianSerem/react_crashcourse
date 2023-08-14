import { useState } from "react"

const EditTask = ({ onEdit, id}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please enter a new task Name')
            return
        }
       onEdit({id, text, day})

        setText('')
        setDay('')


    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label> Task name</label>
            <input type='text' placeholder='enter new task name' value = {text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label> Date and time</label>
            <input type='text' placeholder='enter new date and time' value = {day} onChange={(e) => setDay(e.target.value)}/>
        </div>

        <input className='btn btn-block' type='submit' value='Save Edited task' />
    </form>
  )
}

export default EditTask

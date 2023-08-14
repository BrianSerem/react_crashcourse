import { FaTimes, FaBeer, FaPen } from 'react-icons/fa'
import EditTask from './EditTask'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle, onEdit }) => {

  const [showEditForm, setShowEditForm ] = useState(false)

  const onEditClick = () => {
       setShowEditForm(!showEditForm)
  }

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>{ task.text }
      < FaTimes style={ taskStyle } onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{ task.day }</p>
      < FaPen style={{ backGround: 'yellow' }} onClick={() => onEditClick()}/>
      {showEditForm && <EditTask onEdit={ onEdit } id = {task.id} />}
    </div>
  )
}
const taskStyle = {
    color: 'red',
    cursor: 'pointer',

}



export default Task


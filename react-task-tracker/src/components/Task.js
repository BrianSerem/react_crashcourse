import { FaTimes, FaBeer } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className="task" >
      <h3>{ task.text } < FaTimes style={ taskStyle } onClick={() => onDelete(task.id)}/> </h3>
      <p>{ task.day }</p>
    </div>
  )
}
const taskStyle = {
    color: 'red',
    cursor: 'pointer'
}

export default Task


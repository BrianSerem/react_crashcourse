import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({ title, onAdd, text }) => {


 return (
    <header className='header'>
       <h1> {title}</h1>
       <Button text = {text} color = 'green' onAdd ={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
    name: 'seremiat',
  }
Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Header

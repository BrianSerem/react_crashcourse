import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({ title, name }) => {

 const onClick = () => { console.log('clicked!!')}

 return (
    <header className='header'>
       <h1> {title}</h1>
       <Button text = 'Add' color = 'green' onClick ={onClick}/>
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

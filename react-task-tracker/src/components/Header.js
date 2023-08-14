import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation()


  return (
    <header className='header'>
      <h1> {title}</h1>
      {location.pathname === '/' &&
        <Button color={showAdd ? 'red' : 'green'} buttonText={showAdd ? 'close' : 'add'} onAdd={onAdd} />}
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

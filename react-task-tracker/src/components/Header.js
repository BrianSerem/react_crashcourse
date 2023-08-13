import PropTypes from 'prop-types'

const Header = ({ title, name }) => {
  return (
    <header className='header'>
       <h1> {title}</h1>
       <button className='btn'> Click Here</button>
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

import PropTypes from 'prop-types'

const Header = ({ title, name }) => {
  return (
    <header>
       <h1> {title}</h1>
       <h2> {name}</h2>
       <button> Click Here</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Hello to THIS APP',
    name: 'seremiat',
  }
Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) => {
  return <button style = {{backgroundColor : color}} className='btn' onClick={onAdd} > {text}</button>
}

Button.defaultProps = {
    color : 'blue',
    text: 'Add',
}

Button.propTypes = {
    color : PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;

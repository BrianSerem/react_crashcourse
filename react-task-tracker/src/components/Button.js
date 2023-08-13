import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, buttonText, onAdd}) => {
  return <button style = {{backgroundColor : color}} className='btn' onClick={onAdd} > {buttonText}</button>
}

Button.defaultProps = {
    color : 'blue',
    buttonText: 'Add',
}

Button.propTypes = {
    color : PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;

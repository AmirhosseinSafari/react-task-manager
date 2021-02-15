import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{backgroundColor: color}}
                className="btn"
                onClick={onClick}> 
        {text} </button>
    )
}

Button.defaultProps = {
    text: "Add",
    color: "gray"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Button

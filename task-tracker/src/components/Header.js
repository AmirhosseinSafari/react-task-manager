import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onShowFlage, showFlage}) => {
    return (
        <div>
            <header className="header">
                <h1 style={headerStyle}>
                    {title}
                </h1>
                <Button text={ showFlage ? 'Close' : 'Add' } 
                        color={ showFlage ? 'red' : 'green' } 
                        onClick = { onShowFlage }/>
            </header>
        </div>
    )
}

const headerStyle = {
    color: 'black'
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

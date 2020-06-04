import React from 'react';
import PropTypes from 'prop-types'

const Screen =(props) =>{
    const { initialValue, calcValues } = props

    return(
        <div className="pantallaNegra">
            <h1>{calcValues > 1? calcValues: initialValue}</h1>
        </div>
    )
}
Screen.propTypes ={
    initialValue: PropTypes.number.isRequired,
    calcValues: PropTypes.any.isRequired
}

export default Screen
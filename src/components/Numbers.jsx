import React from 'react';
import PropTypes from 'prop-types'


function Numbers(props){
    const { values, numero } = props
    return(
        <React.Fragment>
            <button value={values}>
                {numero}
            </button>
        </React.Fragment>
    )
}

Numbers.propTypes={
    values: PropTypes.number.isRequired
}

export default Numbers
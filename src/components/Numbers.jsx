import React from 'react';
import PropTypes from 'prop-types'


function Numbers(props){
    const { Number , setData} = props

    return(
        <React.Fragment>
            <button 
            value={Number} 
            onClick={setData}
                style={{
                    width:"60px",
                    height:"60px",
                    borderRadius:"8px",
                    borderStyle:"solid",
                    margin:"2px",
                }}
                key={Number}
            className="button">
                {Number}
            </button>
        </React.Fragment>
    )
}

Numbers.propTypes={
    Number: PropTypes.any.isRequired
}

export default Numbers
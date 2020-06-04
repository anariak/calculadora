import React from 'react';

function Operators(props){
    const {operator, setOperator} = props
    return(
        <button 
        onClick={setOperator}
        value={operator}
        style={{
            width:"60px",
            height:"60px",
            borderRadius:"8px",
            backgroundColor:"white",
            borderStyle:"solid",
            margin:"2px"
        }}>
            {operator}
        </button>
    )
}

export default Operators
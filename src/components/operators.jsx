import React from 'react';

function Operators(props){
    const {Operator, setOperator} = props
    toString(Operator)
    return(
        <button
        onClick={setOperator}
        value={Operator}
        style={{
            width:"60px",
            height:"60px",
            borderRadius:"8px",
            borderStyle:"solid",
            margin:"2px"
        }} className="op">
            {Operator}
        </button>
    )
}

export default Operators
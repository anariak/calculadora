import React from 'react'

function Results(props){
    const {getResult, operator} = props;
    return(
        <button onClick={getResult}
        style={{
            color:"white",
            width:"60px",
            borderRadius:"8px",
            borderStyle:"solid",
            height:"254px"
        }}
        className="result">
            {operator}
        </button>
    )
}

export default Results
import React from 'react';

const Ac = props =>{
    const { reset } = props
    return(
        <button 
        onClick={reset}
        style={{
            width:"60px",
            height:"60px",
            borderRadius:"8px",
            backgroundColor:"#FA5858",
            color:"white",
            borderStyle:"solid",
            margin:"2px"
        }}>
            AC
        </button>
    )
}

export default Ac
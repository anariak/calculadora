import React,{useCallback} from 'react';



const Operators = ({setOperator, operator}) => {
    const onClick = useCallback(()=>{
      setOperator(operator)
    },[operator])
    return (
      <button 
      style={{
        width:"60px",
        height:"60px",
        borderRadius:"8px",
        borderStyle:"solid",
        margin:"2px"
    }} 
      onClick={onClick}>{operator}</button>
    )
  }
export default Operators
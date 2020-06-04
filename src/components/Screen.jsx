import React,{ useState } from 'react';


const Screen =(props) =>{
    const { initialValue } = props
    const[value, setValues] = useState(initialValue)
    return(
        <h1>ACA IRAN LO VALORES</h1>
    )
}

export default Screen
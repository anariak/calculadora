import React from 'react';
import Screen from './components/Screen'
import Numbers from './components/Numbers'


function Calculator(props){
    //set initial Value, all calculators initial in 0 and this come from props
    const {initialValue} = props;
    const numeros = [1,2,3,4,5,6,7,8,9,0]
    return(
        <div>
            <Screen />
            {numeros.map(numero =>(

                <Numbers numero={numero} />
            )
            )}
        </div>)
}

export default Calculator
import React, { useState } from 'react';
import Screen from './components/Screen';
import Numbers from './components/Numbers';
import Ac from './components/Ac';
import Operators  from './components/operators';

function Calculator(props){
    //set initial Value, all calculators initial in 0 and this value come from props
    const {initialValue} = props;
    let listNumber = []
    const [calcValues, setCalcValues ]= useState("")
    const listOfNumbers = [1,2,3,4,5,6,7,8,9,0,"."]

    function setData (e){
        setCalcValues(calcValues + e.target.value)

        listNumber.push(calcValues)
        console.log(listNumber);
    }
    function reset(e){
        e.preventDefault()
        setCalcValues("")
    }
    function setOperator(e){
        e.preventDefault()
    }
    return(
        <div className="calculator">
            <div className="screen">
                <Screen 
                    initialValue={initialValue}
                    calcValues={calcValues}   
                />
            </div>
            <div className="operators">
                <Operators 
                operator={"+"}
                setOperator={setOperator}
                />
                <Operators 
                operator={"-"}
                setOperator={setOperator}
                />
                <Operators 
                operator={"*"}
                setOperator={setOperator}
                />
                <Operators 
                operator={"/"}
                setOperator={setOperator}
                />
            </div>
            <div className="botonera">
            {listOfNumbers.map(Number =>(
                //buttons rendered with the properties indicated in the array listOfNumbers and this also defines the key
                <Numbers 
                Number={Number}
                setData={setData}
                />
                )
            )}
            <Ac reset={reset}
            />
            </div>
        </div>)
}

export default Calculator
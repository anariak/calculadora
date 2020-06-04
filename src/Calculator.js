import React, { useState } from 'react';
import Screen from './components/Screen';
import Numbers from './components/Numbers';
import Ac from './components/Ac';
import Operators  from './components/operators';
import Results from './components/Results';



function Calculator(props){
    //set initial Value, all calculators initial in 0 and this value come from props
    const {initialValue} = props;
    let list = []
    const [calcValues, setCalcValues ]= useState("")
    const NumberList = [1,2,3,4,5,6,7,8,9,0,"."]
    const operatorList = ["+","-","/","*"]

    function setData (e){
        //this function adds the values ​​to the array when a button is pressed
        setCalcValues(calcValues + e.target.value)
        list.push(calcValues)
        console.log(list);
    }
    function reset(e){
        //this function clear and reset the screen
        e.preventDefault()
        setCalcValues("")
    }
    function setOperator(e){
        //this function add operators
        let operator = e.target.value
        setCalcValues(calcValues + operator)
        list.push(calcValues)
    }
    function getResult(e){
        e.preventDefault()
    }
    return(
        <div className="calculator">
            <div className="blackScreen">
                <Screen 
                    initialValue={initialValue}
                    calcValues={calcValues}   
                />
            </div>
            <div className="operators">
            {operatorList.map(Operator=>(
                <Operators
                    setOperator={setOperator}
                    Operator={Operator}
                />
            ))}
            </div>
            <div className="buttons">
            {NumberList.map(Number =>(
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
            <div className="results">
                <Results getResult={getResult} 
                        operator={"="}/>
            </div>
        </div>)
}

export default Calculator
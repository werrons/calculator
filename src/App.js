import React, {useState} from 'react';
// import Button, {Input as MyInput} from "./Components/button"
const App = () => {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [result, setResult] = useState();

    const handleInput1Change = (e) => {
        setInput1(Number(e.target.value))
    };
    const handleInput2Change = (e) => {
        setInput2(Number(e.target.value))
    };
    const handleIncrease = () => {
        setResult(input1 + input2)
    };
    const handleDecrease = () => {
        setResult(input1 - input2)
    };
    const handleVelenie = () => {
        if (input2 !== 0) {
            setResult(input1 / input2);
        }else{
            alert("На ноль не делится")
        }
        setResult(input1 / input2)
    };

    const handleUmnojit = () => {
        setResult(input1 * input2)
    };




    return (
        <div>
            <h1>Hello world</h1>
            <input type="text" value={input1} onChange={handleInput1Change}/>
            <input type="text" value={input2} onChange={handleInput2Change}/>
            <button onClick={handleIncrease}>plus</button>
            <button onClick={handleDecrease}>minus</button>
            <button onClick={handleUmnojit}>umnojit</button>
            <button onClick={handleVelenie}>Delenie</button>
            <h2>Result: {result}</h2>
        </div>

    );
};

export default App
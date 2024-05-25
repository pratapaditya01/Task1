import React, { useState } from "react";

function App() {
const [num1,setnum1]=useState('');
const [num2,setnum2]=useState('');
const [result,setresult]=useState('')
const handlenumber1=(e)=>{
  setnum1(e.target.value);
}

const handlenumber2=(e)=>{
  setnum2(e.target.value);
}

const handleclick=()=>{
  const sum=+num1 + +num2;
  setresult(sum);
}

  return (
    <>
    <input type="number" value={num1} onChange={handlenumber1}></input>

    <input type="number " value={num2} onChange={handlenumber2}></input>

    <button onClick={handleclick}>submit</button>
    <h1>Result: {result}</h1>
  
    </>
  );
}

export default App;

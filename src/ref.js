import React, { useRef,useState } from 'react';

function MyComponent() {
  // Create a ref to persist a mutable value
  const counterRef = useRef(0);
  const [data,setdata]=useState(0)
  const [newState,setNewState]=useState(0)

  const inputRef=useRef(0)

  const incrementCounter = () => {
    counterRef.current += 1;
    console.log('Counter:', counterRef.current);
  };
  const increment=()=>{
    setdata(data+1)
  }
  const Increment2=()=>{
    setNewState(newState+1)
  }

  const change=()=>{
  
    inputRef.current =inputRef.current+1
  }

  return (
    <>
    <div>
      <p>Counter: {counterRef.current}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
    <div>Use State Counter:{data}</div>
    <button onClick={increment}>Increment , useState</button>

    <div>
  <p>{newState}</p>
  <button onClick={Increment2}>Increment2</button>
     
    </div>
    {/* <input type="text" ref={inputRef} /> */}
    <p>Counter: {inputRef.current}</p>
    <button onClick={change}>Click</button>
    </>
  );
}
export default MyComponent

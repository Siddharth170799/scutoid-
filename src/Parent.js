import React, { useState } from 'react'
import Context from './CreateContext2'
import Child from './Child'

const Parent = () => {
    const [input,setInput]=useState("")
    const [data,setData]=useState([{
        name:"siddharth"
    },{
        name:"ajay"
    }])
  return (
    <>
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <Context.Provider value={data}>
            <Child/>

        </Context.Provider>
    </>
    
  )
}

export default Parent

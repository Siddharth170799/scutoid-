import React, { useEffect, useState } from 'react'

const Hello2 = () => {
    const [input,setInput]=useState('');
    const [input2,setInput2]=useState("")
    const [data,setData]=useState()
    // useEffect(()=>{
     
       
    // },[input,input2])
    function hello(){
        setData([{
            name:input,
              age:input2
          }]) 
    }
  return (
    <div>
      <input type='text' onChange={(e)=>setInput(e.target.value)} /><button onClick={hello} >Click To Add</button>
      <input  type='number' onChange={(e)=>setInput2(e.target.value)}/><button onClick={hello}>Click To Add</button>
      {data?.map((item,index)=>{
        return(
            <>
            <div>{item.name}</div>
            <div>{item.age}</div>
            </>
        )

      })}
    </div>
  )
}

export default Hello2


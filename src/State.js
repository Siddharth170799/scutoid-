import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addUser } from './slice'

const State = () => {
  const selector=useSelector((state)=>state.users)
    const [data,setdata]=useState([{
        name:"Siddharth",
        age:24
    }])
    const dispatch=useDispatch()
    
    const [input,setInput]=useState("")
    const [state,setState]=useState()
    const [state2,setInput2]=useState("")
    const [state3,setState2]=useState()

    // function click(){
    //     setState2(state2)
    //     setState(input)
    // }
    function click(){
      setdata([...data,new4])
      dispatch(addUser(new4))
    }
    const new2={
        name:"abhay",
        age:25
    }
    const new3={
        name:"nag",
        age:20
    }
    const new4={
        name:input,
        age:parseInt(state2)
    }
  return (
    <>
    <div> 
        <label>Enter Name</label>
        <input type='text' onChange={(e)=>{setInput(e.target.value)

}}/></div>
<div>
<label>Enter Age</label>
<input type='number' onChange={(e)=>{setInput2(e.target.value)
}}/>
<div><button onClick={click}>Click</button></div>

</div>
   

    <div>
      <button onClick={()=>{
        setdata([...data,new2])
      }}>Click to Get</button>
      <button onClick={()=>{
        setdata([...data,new3])
      }}>Click To Get</button>
      
    </div>
    {/* <div>{data.map((item,index)=>{
        return(
            <>
            <div key={index}>{item.name}</div>
            <div key={index}>{item.age}</div>
            </>
        )
    })}</div> */}
    {selector.map((item,index)=>{
        return(
            <>
            <div key={index}>{item.name}</div>
            <div key={index}>{item.age}</div>
            </>
        )
    })}
    
    </>
  )
}

export default State

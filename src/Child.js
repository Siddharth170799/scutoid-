import React, { useContext } from 'react'
import Context from './CreateContext2'

const Child = () => {
    const data=useContext(Context)
  return (
    <div>
        <h1>child</h1>
       {/* {data?.split("").reverse().join("")}   */}
       {data.map((item)=>{
        return(
<div>{item.name}</div>
        )
})}
    </div>
  )
}

export default Child

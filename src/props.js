import React, { useEffect } from "react";



const Props=({key1})=>{
    useEffect(()=>{
        console.log("siddharth")
    },[key1])
    return(
        <div>
 <h1>{key1}</h1>

        </div>
    )
}
export default Props


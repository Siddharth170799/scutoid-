import React, { useState } from "react";

const Ap=()=>{
  const [set,setState]=useState(true)



    return(
        <div>
            <button onClick={()=>{
                setState(!set)
            }}>
               Click Me
            </button>
            {set ? <p>Hello</p> :"" }
            {set}
        </div>
    )
}

export default Ap
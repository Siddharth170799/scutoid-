import React, { useState } from "react";
import Props from "./props";
import { computeHeadingLevel } from "@testing-library/react";




const Count=()=>{
    const [count,setCount]=useState({hide:true,currentCount:0});



console.log(count)



    return(
        <div>

<button onClick={()=>setCount((prev)=>({...prev,hide:!prev.hide,currentCount:prev.currentCount+1}))}>
Click
</button>
{
    count.hide ? <h1>{count.currentCount}</h1> : <h1>"hidden number"</h1>}

<Props key1={count.currentCount}/>

</div>
    )
}
export default Count
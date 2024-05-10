import React, { useState } from 'react'

const AddTransaction = () => {


    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
  return (
    <>
      
      <h3>Add new transaction</h3>
      <form >
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
      </>
  
  )
}

export default AddTransaction

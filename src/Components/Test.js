/* import React from 'react'
import { useState } from 'react'

const Test = () => {
  const [test,setTest]=useState([])
  const [text,setText]=useState()

  const element=(t)=>{
     return setTest([t,...test])
  }

  const sam=(e)=>{
    e.preventDefault()
    element(text)
    setText("")
  }
  
  return (
    <div>
      <form onSubmit={sam}>
        <input type='text' onChange={(e)=>setText(e.target.value)}></input>
        <input type="submit"></input>
      </form>
   <li>
    

   </li>
       

       
       
    </div>
  )
}

export default Test */
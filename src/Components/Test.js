import React, { useState } from 'react'

const Test = () => {
  const items=[
    {id:0,color:'red',car:'Ford'},
    {id:0,color:'blue',car:'Mercedes'},
    {id:0,color:'green',car:'Ferrari'},
    {id:0,color:'yellow',car:'BMW'},
  ]
  const [item,setItem]=useState(items)
 
  

  return (
    <div>
      {item.map((t)=>{
        return t.color
      })}
    </div>
  )
}

export default Test
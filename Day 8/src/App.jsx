import React, { useState } from 'react'
import useValue from './hooks/useValue'

const App = () => {
  const[P,setP]=useState(0)
  const[T,setT]=useState(0)
  const[R,setR]=useState(0)
  const[SI,setSI]=useState(0)

  const handleClick=(e)=>{
    e.preventDefault()
    const value=useValue(P,T,R)
    setSI(value);
    console.log(P + " " + T + " " + R);
  }

  return (
    <>
      <form className='flex flex-col items-center justify-center gap-10 h-{100vh} w-full'>
        <label>Principal:</label><input type="number" placeholder='Enter the Principal'onChange={(e)=>{setP(e.target.value)}}/>
        <label>time:</label><input type="number" placeholder='Enter the time' onChange={(e)=>{setT(e.target.value)}}/>
        <label>Rate :</label><input type="number" placeholder='Enter the rate' onChange={(e)=>{setR(e.target.value)}}/>
        <button className='bg-black text-white p-4 rounded-lg' onClick={handleClick}>Submit</button>
      </form>
      <h1>The SI is : {SI} </h1>
    </>
  )
}

export default App
//redux toolkit
//zustand{better}
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,reset } from './CounterSlice'
import { useState } from 'react'



const App = () => { 
  const [amount,setAmount]=useState(0)
  const value=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  return (
    <>
    <div className='h-[100vh] w-[100vw] flex felx-col justify-center items-center'>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input type="number" onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Add by increment</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
    </>
  )
}

export default App
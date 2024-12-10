import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App=()=>{
  const[admin,setAdmin]=useState('...loading')

  useEffect(()=>{
    axios.get("http://localhost:5000/getAdmin").then((data)=>setAdmin(data)).catch((err)=>console.log(err))
  },[])
}


  return (
    <div className="flex items-center justify-center ">
      <form action="http://localhost:5000/chirag" method="post">
      <h1>Admin:{admin}</h1>
      <label htmlFor="user" className='text-2xl'>Name : </label>
      <input type="text" name="user"/>
      <label htmlFor="password" className='text-2xl'>Password : </label>
      <input type="password" name="password"/>
      <button type="submit" className='text-2xl rounded-lg bg-black text-white p-8'>submit</button>
      </form>
      
    </div>
  )


export default App
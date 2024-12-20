import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const[id,setId]=useState(0);
  const[name,setName]=useState("");
  const[pricing,setPricing]=useState(0);
  const[msg,setMsg]=useState([])
  const[movie,setMovies]=useState([])

  const handleSubmit =async (e)=>{
    e.preventDefault()
    try{
        const response = await axios.post("http://localhost:4000/createProduct",{id:id,name:name,price:pricing})
        console.log(response)
        if(response.status==200){
          setMsg({value:"Inserted Successfully!",state:true})
        }
    }catch (error) {
      if (error.response && error.response.status === 500) {
        setMsg({value:"Product already exists!",status:false})
      } else {
        setMsg({value:"An error occurred!",status:false})
      }
    }
    setTimeout(()=>{
      setMsg("")
    },4000)
  }
  useEffect(() => {
    const fetchData = async () => {
      const movie = await axios.get("http://localhost:4000/viewProduct").then((movie)=>setMovies(movie.data));
      console.log(movie)
    }
    fetchData();
  }, [msg]);

  

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-around'>
    <h1 className='text-5xl font-semibold primary-font'>Product Entry</h1>
    <form method='post' className='flex flex-col h-[50%] w-[50%] text-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg '>
      ID:
      <input type="number" name="id" id="productId" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => setId(e.target.value)} />
      Name:
      <input type="text" name="name" id="name" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        onChange={(e) => setName(e.target.value)} />
      Pricing:
      <input type="number" name="pricing" id="pricing" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => setPricing(e.target.value)} />
      <input type="submit" value="Submit" className='p-2 px-4 bg-black text-white rounded-lg font-semibold' onClick={handleSubmit} />
      <p className={`${msg.state? "text-green-400":"text-red-400"} text-xl`}>{msg.value}</p>
    </form>

    <div className='h-[100vh] w-[100vw]'>
      <p>Products by view</p>
     
     <ol>
      {
        movie.map((movie,index)=>{
          return <li key={index}>ID:{movie.ID},Name:{movie.Name},Pricing:{movie.Price}</li>
        })
      }
     </ol>
     
      
    </div>
  </div>
  )
}

export default App
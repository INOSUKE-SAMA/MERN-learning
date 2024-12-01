import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  
  const[items,setItems]=useState([]);

  useEffect(()=>{
    getData();
   },[])

   const getData=async()=>{
    await fetch("https://www.freetestapi.com/api/v1/movies")
    .then((res)=>res.json())
    .then((data)=>{setItems(data.meals)})
    .catch((err)=>console.log(err)); 

   }
  return (
    <div className='grid grid-cols-3 p-6 gap-4'>
      {
        items.map(({strMeal,strMealThumb,idMeal})=>{
            return(
              <div key={idMeal}>
                    <h1 className='text-2xl font-semibold'>{strMeal}</h1>
                    <img src={strMealThumb} alt={strMeal} />
              </div>
            )
        })
      }
    </div>
  )
}

export default App
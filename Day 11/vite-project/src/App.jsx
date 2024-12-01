import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  
  const[items,setItems]=useState([]);

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
      setItems(res.data.meals)
  }).catch((err)=>{
      console.log("Error fetching data")
  })
  },[])
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
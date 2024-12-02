import React, { useEffect, useState } from 'react'

const Form = () => {
    const[pass ,setPass]=useState('');
    const[errMsg, setErrMsg]=useState('');

    useEffect(()=>{
        if(pass.trim()==""){
            setErrMsg("Password must not be empty ")
        }
        else if(pass.length<6){
            setErrMsg("Password must be greater than 6 charcters")
        }

        else if(pass.split(" ").length>1){
            setErrMsg("Password must not contain space")
        }


        else{
            setErrMsg("")
        }

    },[pass])

    

   
  return (
    <div>
        <form>
            Password : 
            <input type="password" placeholder='Enter the password' onChange={(e)=>{setPass(e.target.value)}}/>
        </form>
        {
            errMsg==""?"":
            <h2 className='text-red-700'>*{errMsg}</h2>
        }
         {
            errMsg=""?
            <button className='bg-black text-white'> Submit</button>:
            <button className='bg-black text-white opacity-50 disabled:'> Submit</button>
         }

    </div>
  )
}

export default Form
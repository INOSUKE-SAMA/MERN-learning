import React from 'react'

const Contact = () => {
  return (
    <div className=' flex flex-col justify-center items-center px-4 py-8 h-screen bg-gray-50'>
        <div className='max-w-3xl text-center text-lg text-gray-900 leading-relaxed'>
            <label>Name : </label> <input placeholder="Enter your name"/>
            <label>email : </label> <input placeholder="Enter your email" />
            <label>Contact number : </label> <input placeholder="Enter your number" />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import Heading from './components/Heading'
import Button from './components/button'
const App = () => {



  return (
    <div>
      <Heading name="Chirag" className="text-red-500"/>
      <Heading name="Tanjiro" className="text-blue-500"/>
      <Heading name="Insouke" className="text-green-500"/>
      <Button name="Submit" className="text-black bg-pink-700 p-4 rounded-2xl "/>
      <Button name="Submit2" className="text-black bg-amber-200 p-4 rounded-2xl text-3xl"/>
    </div>
  )





}

export default App
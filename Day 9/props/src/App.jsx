import React, { createContext, useState } from 'react';
import Component1 from './component/component1';

export const Chirag = createContext();

const App = () => {
  const [name,setName]=useState("...loading");
  const[tempName,set]
  const name = "Chirag Shahi";
  const age = 20;
  return (
    <Chirag.Provider value={{ name:name, age:age }}>
      <input type="text" onChange={(e)=>{setName{e.target.value}}}/>
      <Component1 />
    </Chirag.Provider>
  );
};

export default App;

import React, { useContext } from 'react';
import { Chirag } from '../App';

const Component3 = () => {
  const { name, age } = useContext(Chirag);
  
  return (
    <div>
      <h1>I am: {name}</h1>
      <h1>My age is: {age}</h1>
    </div>
  );
};

export default Component3;

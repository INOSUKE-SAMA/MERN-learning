import React, { useState } from 'react'

export default function useValue(P,T,R) {
    const value=(P*T*R)/100;
    return value;
  
    
  
}

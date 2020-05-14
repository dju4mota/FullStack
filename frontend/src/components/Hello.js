import React from 'react';

export default function Hello({name, children}){
  return (
    <>
      <h1>Hello, {name}! =)</h1>
      {children}
    </>
  )
}

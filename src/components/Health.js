import React from 'react'

const Health = ({getChances}) => {
  return <div>
    Health: 
    {getChances.map((heart) => <div>{heart}</div>)}
    </div>;
}

export default Health
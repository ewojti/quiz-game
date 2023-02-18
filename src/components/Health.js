import React from 'react'
import { nanoid } from 'nanoid';

const Health = ({getChances}) => {
  return (
    <div>
      Health:
      {getChances.map((heart) => (
        <div key={nanoid()}>{heart}</div>
      ))}
    </div>
  );
}

export default Health
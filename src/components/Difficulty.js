import React from 'react';
import { nanoid } from 'nanoid';

const Difficulty = ({ difficulty, pickDifficulty }) => {
  return (
    <div>
      {difficulty.map((item) => (
        <button key={nanoid()} onClick={(e) => pickDifficulty(e)}>{item}</button>
      ))}
    </div>
  );
};

export default Difficulty
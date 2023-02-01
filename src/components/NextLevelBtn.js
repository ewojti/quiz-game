import React from 'react'

const NextLevelBtn = ({ getNextLevel }) => {
  return (
    <div>
      <button onClick={getNextLevel}>Next Level</button>
    </div>
  );
};

export default NextLevelBtn
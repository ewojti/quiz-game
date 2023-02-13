import React from 'react'

const NextLevelBtn = ({
  setNextLevel,
  setLevel,
  getRandomNumbCat
}) => {


  const getNextLevel = () => {
    setNextLevel(false);
    getRandomNumbCat();
    setLevel((prevLevel) => (prevLevel += 1));
  };

  return (
    <div>
      <button onClick={() => getNextLevel()}>Next Level</button>
    </div>
  );
};

export default NextLevelBtn
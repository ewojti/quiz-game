import React from 'react'

const NextLevelBtn = ({
  level,
  possibleLevels,
  setNextLevel,
  setRandomCategory,
  setLevel,
}) => {
  const getRandomNumbCat = () => {
    setRandomCategory(Math.floor(Math.random() * 22) + 10);
  };

  const getNextLevel = () => {
    setNextLevel(false);
    getRandomNumbCat();
    if (possibleLevels === level) {
      setLevel((prevLevel) => (prevLevel += 0));
    } else if (possibleLevels > level) {
      setLevel((prevLevel) => (prevLevel += 1));
    } else if (possibleLevels > level) {
      setLevel((prevLevel) => (prevLevel += 0));
    }
  };

  return (
    <div>
      <button onClick={() => getNextLevel()}>Next Level</button>
    </div>
  );
};

export default NextLevelBtn
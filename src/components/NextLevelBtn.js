import React from 'react'

const NextLevelBtn = ({
  levels,
  setDifficultyLevel,
  setNextLevel,
  setRandomCategory,
  getPointDifficulty
}) => {
  const getRandomNumbCat = () => {
    setRandomCategory(Math.floor(Math.random() * 22) + 10);
  };

  const getNextLevel = () => {
    levels.shift();
    setDifficultyLevel(levels[0]);
    setNextLevel(false);
    getRandomNumbCat();
    getPointDifficulty()
  };


  return (
    <div>
      <button onClick={() => getNextLevel()}>Next Level</button>
    </div>
  );
};

export default NextLevelBtn
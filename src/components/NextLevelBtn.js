import React from 'react'

const NextLevelBtn = ({
  levels,
  setDifficultyLevel,
  setNextLevel,
  setRandomCategory,
  questionAnswer
}) => {

  const getRandomNumbCat = () => {
    setRandomCategory(Math.floor(Math.random() * 22) + 10);
  };

  const getNextLevel = () => {
    levels.shift();
    setDifficultyLevel(levels[0]);
    setNextLevel(false);
    getRandomNumbCat();
  };

  return (
    <div>
      <button onClick={() => getNextLevel()}>Next Level</button>
    </div>
  );
};

export default NextLevelBtn
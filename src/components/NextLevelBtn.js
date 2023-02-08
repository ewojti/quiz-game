import React from 'react'

const NextLevelBtn = ({
  setDifficultyLevel,
  setNextLevel,
  setRandomCategory,
  setLevel,
  questionAnswer,
  isGameOver,
  isEndGame
}) => {

  const getRandomNumbCat = () => {
    setRandomCategory(Math.floor(Math.random() * 22) + 10);
  };

  const getNextLevel = () => {
    setNextLevel(false);
    getRandomNumbCat();
    setLevel((prevLevel) => (prevLevel += 1));
  };

  return (
    <div>
      <button onClick={() => getNextLevel()}>
        {isEndGame ? "End game" : "Next Level"}
      </button>
    </div>
  );
};

export default NextLevelBtn
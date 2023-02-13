import React from 'react'

const RepeatLevelBtn = ({
  getRandomNumbCat,
  setRepeatLevel
}) => {
  const getAnotherQuest = () => {
    setRepeatLevel(false);
    getRandomNumbCat();
  };
  return (
    <div>
      <button onClick={() => getAnotherQuest()}>Another Question</button>
    </div>
  );
};

export default RepeatLevelBtn
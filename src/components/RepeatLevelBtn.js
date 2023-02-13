import React from 'react'

const RepeatLevelBtn = ({
  getRandomNumbCat,
  setRepeatLevel,
  setGetChances,
}) => {
  const getAnotherQuest = () => {
    setRepeatLevel(false);
    getRandomNumbCat();
    // setGetChances((heart) => heart.filter((_, index) => index !== 0));
  };
  return (
    <div>
      <button onClick={() => getAnotherQuest()}>Another Question</button>
    </div>
  );
};

export default RepeatLevelBtn
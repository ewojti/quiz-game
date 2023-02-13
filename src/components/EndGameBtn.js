import React from 'react'

const EndGameBtn = ({ setGameMode, setIsEndGame, getChances }) => {
  const getEndGame = () => {
    setGameMode(false);
    setIsEndGame(true);
  };
  return (
    <div>
      <button onClick={() => getEndGame()}>{getChances === 0? 'Game Over' :'End Game'}</button>
    </div>
  );
};

export default EndGameBtn
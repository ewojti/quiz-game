import React from 'react'

const EndGameBtn = ({ setGameMode, setIsEndGame }) => {
  const getEndGame = () => {
    setGameMode(false);
    setIsEndGame(true);
  };
  return (
    <div>
      <button onClick={() => getEndGame()}>End Game</button>
    </div>
  );
};

export default EndGameBtn
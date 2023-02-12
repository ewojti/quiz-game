import React from 'react';


const EndGame = ({
  setIsEndGame,
  setIsGameModeData,
  setStartGame
}) => {
  const resetGame = () => {
    setIsGameModeData(false);
    setStartGame(false);
    setIsEndGame(false);
    console.log('reset')
  };

  return (
    <div>
      EndGame
      <button onClick={()=> resetGame()}>New Game</button>
    </div>
  );
};

export default EndGame
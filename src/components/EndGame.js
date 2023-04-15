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
      <h1 className='headtext__h1'>End Game</h1>
      <button className="custom__button" onClick={() => resetGame()}>
        New Game
      </button>
    </div>
  );
};

export default EndGame
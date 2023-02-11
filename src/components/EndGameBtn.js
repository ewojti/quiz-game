import React from 'react'

const EndGameBtn = ({setGameMode}) => {
  const getEndGame = () => {
      setGameMode(false);
  }
  return (
    <div>
      <button onClick={() => setGameMode(false)}>End Game</button>
    </div>
  );
}

export default EndGameBtn
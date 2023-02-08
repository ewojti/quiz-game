import React from 'react'
import NewGameBtn from "./NewGameBtn";


const EndGame = ({
  setIsGameOver,
  setIsEndGame,
  setTrueFalseBtn,
  setThreeByThreeBtn,
  setStartGame
}) => {
  const resetGame = () => {
    setTrueFalseBtn(false);
    setThreeByThreeBtn(false);
    setStartGame(false);
    setIsEndGame(false);
    setIsGameOver(false);
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
import React from 'react'


const GameMode = ({
  setThreeByThreeBtn,
  setTrueFalseBtn,
  setType,
  setGameMode,
  setPossibleLevels
}) => {


  const getGameMode = () =>{
    setGameMode(true)
  }  
  
  const trueFalseGameMode = () => {
    setTrueFalseBtn(true);
    setThreeByThreeBtn(false);
    setType("boolean");
    setPossibleLevels(5);
    getGameMode()
  };

  const threeByThreeGameMode = () => {
    setThreeByThreeBtn(true);
    setTrueFalseBtn(false);
    setType("multiple");
    setPossibleLevels(3);
    getGameMode()
  };

  return (
    <div>
      <h1>Choose GameMode</h1>
      <button id="trueFalseBtn" onClick={() => trueFalseGameMode()}>
        True/False
      </button>
      <button id="threeByThreeBtn" onClick={() => threeByThreeGameMode()}>
        3 po 3
      </button>
    </div>
  );
};

export default GameMode
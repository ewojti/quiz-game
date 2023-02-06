import React from 'react'


const Gameplay = ({
  setThreeByThreeBtn,
  setTrueFalseBtn,
  setType,
  setGameplay,
  setPossibleLevels
}) => {


  const getGameplay = () =>{
    setGameplay(true)
  }  
  
  const trueFalseGameplay = () => {
    setTrueFalseBtn(true);
    setThreeByThreeBtn(false);
    setType("boolean");
    setPossibleLevels(10);
    getGameplay()
  };

  const threeByThreeGameplay = () => {
    setThreeByThreeBtn(true);
    setTrueFalseBtn(false);
    setType("multiple");
    setPossibleLevels(15);
    getGameplay()
  };

  return (
    <div>
      <h1>Choose Gameplay</h1>
      <button id="trueFalseBtn" onClick={() => trueFalseGameplay()}>
        True/False
      </button>
      <button id="threeByThreeBtn" onClick={() => threeByThreeGameplay()}>
        3 po 3
      </button>
    </div>
  );
};

export default Gameplay
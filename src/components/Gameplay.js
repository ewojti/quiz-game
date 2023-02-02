import React from 'react'


const Gameplay = ({
  setThreeByThreeBtn,
  setTrueFalseBtn,
  setType,
  setGameplay
}) => {


  const getGameplay = () =>{
    setGameplay(true)
  }  
  const trueFalseGameplay = () => {
    setTrueFalseBtn(true);
    setThreeByThreeBtn(false);
    setType("boolean");
    getGameplay()
  };

  const threeByThreeGameplay = () => {
    setThreeByThreeBtn(true);
    setTrueFalseBtn(false);
    setType("multiple");
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
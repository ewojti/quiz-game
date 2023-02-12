import React from 'react';
import {gameModeData} from '../utils/gameModeData';
import { nanoid } from "nanoid";


const GameMode = ({
  setIsGameModeData,
  setType,
  setGameMode,
  setPossibleLevels
}) => {

  const getGameMode = () =>{
    setGameMode(true)
  }

  const pickGameMode = (on) => {
    console.log(on)
    setIsGameModeData(true)
    setType(gameModeData[on].type);
    setPossibleLevels(gameModeData[on].possibleLevels);
    getGameMode()
  }


  return (
    <div>
      <h1>Choose GameMode</h1>
    {gameModeData.map((item)=> (
          <button key={nanoid()} id="third" onClick={() => pickGameMode(gameModeData.indexOf(item))}>
            {item.name}
          </button>
    ))}
    </div>
  );
};

export default GameMode
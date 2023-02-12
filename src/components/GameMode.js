import React, { useState } from 'react';
import {gameModeData} from '../utils/gameModeData';
import { nanoid } from "nanoid";


const GameMode = ({
  setIsGameModeData,
  setDifficultyLevel,
  setType,
  setGameMode,
  setPossibleLevels,
  setGetChances
}) => {
  const getGameMode = () => {
    setGameMode(true);
  };

  const stillChance = (heart) => {
    const chanceArr = new Array(heart).fill("❤️");
    setGetChances(chanceArr)
  }


  const pickGameMode = (on) => {
    stillChance(gameModeData[on].chance)
    setIsGameModeData(true);
    setType(gameModeData[on].type);
    setPossibleLevels(gameModeData[on].possibleLevels);
    setDifficultyLevel(gameModeData[on].difficulty);
    getGameMode();
  };

  return (
    <div>
      <h1>Choose GameMode</h1>
      {gameModeData.map((item) => (
        <button
          key={nanoid()}
          id="third"
          onClick={() => pickGameMode(gameModeData.indexOf(item))}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GameMode
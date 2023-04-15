import React from 'react';
import {gameModeData} from '../utils/gameModeData';
import { nanoid } from "nanoid";


const GameMode = ({
  setIsGameModeData,
  setDifficultyLevel,
  setType,
  setGameMode,
  setPossibleLevels,
  setGetChances,
  setAmount
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
    setAmount(gameModeData[on].amount)
    getGameMode();
  };

  return (
    <>
      <h1 className="headtext__h1">Choose game mode</h1>
      <div className="flex__center">
        {gameModeData.map((item) => (
          <button
            key={nanoid()}
            onClick={() => pickGameMode(gameModeData.indexOf(item))}
            className="custom__button"
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default GameMode
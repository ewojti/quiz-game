import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { gameModeData } from "../utils/gameModeData";
import { nanoid } from "nanoid";
import CategoryList from "./CategoryList";
import Difficulty from "./Difficulty";

const GameMode = ({
  setIsGameModeData,
  setDifficultyLevel,
  setType,
  setGameMode,
  setGameModeType,
  setPossibleLevels,
  setGetChances,
}) => {
  const [isGameModeChoosen, setIsGameModeChoosen] = useState(false);
  const [isDifficultyChoosen, setIsDifficultyChoosen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const difficulty = ["easy", "medium", "hard", "random"];

  const fetchQuestionList = async () => {
    const categoryData = await fetchData(
      "https://opentdb.com/api_category.php"
    );
    setCategoryList(categoryData.trivia_categories);
  };

  useEffect(() => {
    fetchQuestionList();
  }, [isGameModeChoosen]);

  const getGameMode = () => {
    setGameMode(true);
  };

  const stillChance = (heart) => {
    const chanceArr = new Array(heart).fill("❤️");
    setGetChances(chanceArr);
  };
  


  const pickGameMode = (on) => {
    stillChance(gameModeData[on].chance);
    setIsGameModeData(true);
    setType(gameModeData[on].type);
    setPossibleLevels(gameModeData[on].possibleLevels);
    setDifficultyLevel(gameModeData[on].difficulty);
    setGameModeType(gameModeData[on].name)
    setIsGameModeChoosen(true)
  };



  const pickDifficulty = (e) => {
    setIsDifficultyChoosen(true);
    setDifficultyLevel(e.target.textContent);
  };

  return (
    <div>
      <h1>Choose GameMode</h1>
      {gameModeData.map((item) => (
        <button
          key={nanoid()}
          onClick={() => pickGameMode(gameModeData.indexOf(item))}
        >
          {item.name}
        </button>
      ))}
      {isGameModeChoosen ? (
        <div>
          <h1>Choose difficulty level</h1>
          <Difficulty difficulty={difficulty} pickDifficulty={pickDifficulty} />
        </div>
      ) : (
        ""
      )}
      {isDifficultyChoosen ? (
        <button onClick={() => getGameMode()}>Play game</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameMode;

import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { gameModeData } from "../utils/gameModeData";
import { nanoid } from "nanoid";
import CategoryList from "./CategoryList";
import Difficulty from "./Difficulty";

const GameMode = ({
  setIsGameModeData,
  setDifficultyLevel,
  setCategory,
  setType,
  setGameMode,
  setPossibleLevels,
  setGetChances,
}) => {
  const [isGameModeChoosen, setIsGameModeChoosen] = useState(false);
  const [isCategoryChoosen, setIsCategoryChoosen] = useState(false);
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
    console.log(threeRandomCat)
  }, [isGameModeChoosen]);

  const getGameMode = () => {
    setGameMode(true);
  };

  const stillChance = (heart) => {
    const chanceArr = new Array(heart).fill("❤️");
    setGetChances(chanceArr);
  };
  
  const [threeRandomCat, setThreeRandomCat] = useState()

  function getMultipleCategories(state, arr, num) {
    state(arr.sort(() => 0.5 - Math.random()).slice(0, num));
  }

  const pickGameMode = (on) => {
    stillChance(gameModeData[on].chance);
    setIsGameModeData(true);
    setType(gameModeData[on].type);
    setPossibleLevels(gameModeData[on].possibleLevels);
    setDifficultyLevel(gameModeData[on].difficulty);
    setIsGameModeChoosen(true);
    getMultipleCategories(setThreeRandomCat, categoryList, 3);
  };

  const pickCategory = (e) => {
    setIsCategoryChoosen(true);
    setCategory(e.target.value);
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
          <h1>Choose Category</h1>
          <CategoryList
            pickCategory={pickCategory}
            categoryList={categoryList}
            threeRandomCat={threeRandomCat}
          />
        </div>
      ) : (
        ""
      )}
      {isCategoryChoosen ? (
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

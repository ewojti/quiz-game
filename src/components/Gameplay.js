import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { gameModeData } from "../utils/gameModeData";
import { nanoid } from "nanoid";
import Options from "./Options";
import Score from "./Score";
import Level from "./Level";
import Difficulty from "./Difficulty";

const Gameplay = ({
  type,
  possibleLevels,
  difficultyLevel,
  setIsEndGame,
  setGameMode,
  getChances,
  amount,
}) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const [randomCategory, setRandomCategory] = useState(26);
  const [getPoint, setGetPoint] = useState(0);
  const [level, setLevel] = useState(1);
  const [pointDifficulty, setPointDifficulty] = useState(5);
  const [lastLvlAnsw, setLastLvlAnsw] = useState(false);
  const [repeatLevel, setRepeatLevel] = useState(false);

  const fetchQuestionData = async () => {
    const questionData = await fetchData(
      `https://opentdb.com/api.php?amount=${amount}&category=${randomCategory}&difficulty=${difficultyLevel}&type=${type}`
    );
    setQuestionAnswer(
      questionData.results.map((questionItem) => {
        const answer = questionItem.correct_answer;
        const options = [
          ...questionItem.incorrect_answers.map((incorrect) => incorrect),
          answer,
        ];
        return {
          id: nanoid(),
          category: questionItem.category,
          question: questionItem.question,
          answer: answer,
          options: options,
          difficulty: questionItem.difficulty,
          type: questionItem.type,
          showAnswer: false,
          selectedAnswer: "",
        };
      })
    );
  };

  useEffect(() => {
    fetchQuestionData();
    getPointDifficulty();
  }, [randomCategory]);

  const handleSelectAnswer = (questionId, selectedAnswer) => {
    setQuestionAnswer((prevQuestionAnswer) =>
      prevQuestionAnswer.map((option) =>
        option.id === questionId
          ? { ...option, selectedAnswer: selectedAnswer, showAnswer: true }
          : option
      )
    );
    score(selectedAnswer, pointDifficulty);
    questionAnswer.map((quest) => {
      if (possibleLevels === level && quest.answer === selectedAnswer) {
        setLastLvlAnsw(true);
      } else if (possibleLevels > level && quest.answer === selectedAnswer) {
        setNextLevel(true);
      } else if (possibleLevels >= level && quest.answer !== selectedAnswer) {
        setRepeatLevel(true);
        getChances.pop();
      }
    });
    isStillChance();
  };

  const isStillChance = () => {
    if (getChances.length === 0) {
      setLastLvlAnsw(true);
    }
  };

  const getPointDifficulty = () => {
    switch (difficultyLevel){
    case "easy":
      return setPointDifficulty(5);
    case "medium":
      return setPointDifficulty(10);
      default: 
      setPointDifficulty(15);
      break;
   }
  };

  const score = (selected, point) => {
    questionAnswer.map((quest) => {
      if (quest.answer === selected) {
        setGetPoint((prevGetPoint) => (prevGetPoint += point));
      } else {
        setGetPoint((prevGetPoint) => (prevGetPoint -= point));
      }
    });
  };

  const getRandomNumbCat = () => {
    setRandomCategory(Math.floor(Math.random() * 22) + 10);
  };

  const getNextLevel = () => {
    setNextLevel(false);
    getRandomNumbCat();
    setLevel((prevLevel) => (prevLevel += 1));
  };

  const getEndGame = () => {
    setGameMode(false);
    setIsEndGame(true);
  };

  const getAnotherQuest = () => {
    setRepeatLevel(false);
    getRandomNumbCat();
  };

  return (
    <div className="container">
      <div>
        <Score key={nanoid()} getPoint={getPoint} />
        <Level level={level} possibleLevels={possibleLevels} />
        <Difficulty difficultyLevel={difficultyLevel} />
        <div className="health">
          Health:
          {getChances.map((heart) => (
            <div key={nanoid()}>{heart}</div>
          ))}
        </div>
      </div>
      <div className="container__question flexColumn__center">
        {questionAnswer.map((item) => {
          return (
            <Options
              item={item}
              key={nanoid()}
              handleSelectAnswer={handleSelectAnswer}
              setNextLevel={setNextLevel}
            />
          );
        })}
        {nextLevel ? (
          <button
            className="custom__button wobble-hor-bottom"
            onClick={() => getNextLevel()}
          >
            Next Level
          </button>
        ) : lastLvlAnsw ? (
          <button
            className="custom__button wobble-hor-bottom"
            onClick={() => getEndGame()}
          >
            End Game
          </button>
        ) : repeatLevel ? (
          <button
            className="custom__button wobble-hor-bottom"
            onClick={() => getAnotherQuest()}
          >
            Another Question
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Gameplay;

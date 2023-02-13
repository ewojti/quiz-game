import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { gameModeData } from '../utils/gameModeData';
import { nanoid } from "nanoid";
import Options from "./Options";
import NextLevelBtn from "./NextLevelBtn";
import EndGameBtn from "./EndGameBtn";
import RepeatLevelBtn from "./RepeatLevelBtn";
import Score from "./Score";
import Health from "./Health";
import Level from './Level';


const Gameplay = ({
  category,
  type,
  possibleLevels,
  difficultyLevel,
  isEndGame,
  setIsEndGame,
  setGameMode,
  getChances
}) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const id = nanoid();
  const [amount, setAmount] = useState(1);
  const [nextLevel, setNextLevel] = useState(false);
  const [randomCategory, setRandomCategory] = useState(category);
  const [getPoint, setGetPoint] = useState(0);
  const [level, setLevel] = useState(1);
  const [pointDifficulty, setPointDifficulty] = useState(5);
  const [lastLvlAnsw, setLastLvlAnsw] = useState(false);
  const [repeatLevel, setRepeatLevel] = useState(false);

  const fetchGameplayData = async () => {
    const gameplayData = await fetchData(
      `https://opentdb.com/api.php?amount=${amount}&category=${randomCategory}&difficulty=${difficultyLevel}&type=${type}`
    );
    setQuestionAnswer(
      gameplayData.results.map((questionItem) => {
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
    fetchGameplayData();
    getPointDifficulty();
    isEmptyData()
    console.log(randomCategory)
  }, [randomCategory]);

  const isEmptyData = () => {
    questionAnswer.map(item => (
      item.length === 0? fetchGameplayData() :console.log('full') 
    ))
  }

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
    isStillChance()
  };

  const isStillChance = () => {
    if (getChances.length === 0) {setLastLvlAnsw(true)}
  }

  const getPointDifficulty = () => {
    if (difficultyLevel === "easy") {
      setPointDifficulty(5);
    } else if (difficultyLevel === "medium") {
      setPointDifficulty(10);
    } else {
      setPointDifficulty(15);
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
    setRandomCategory(Math.floor(Math.random() * 22) + 9);
    setRandomCategory(13);
    console.log(questionAnswer)
  };

  return (
    <div>
      <div>
        <Score key={nanoid()} getPoint={getPoint} />
        {questionAnswer.map((quest) => (
          <p key={id}>{quest.category}</p>
        ))}
        <Level level={level} possibleLevels={possibleLevels} />
        <p>{difficultyLevel}</p>
        <Health getChances={getChances} />
      </div>
      {questionAnswer.map((quest) => (
        <p key={id}>{quest.question}</p>
      ))}
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
        <NextLevelBtn
          setNextLevel={setNextLevel}
          setLevel={setLevel}
          level={level}
          possibleLevels={possibleLevels}
          questionAnswer={questionAnswer}
          getPointDifficulty={getPointDifficulty}
          isEndGame={isEndGame}
          getRandomNumbCat={getRandomNumbCat}
        />
      ) : lastLvlAnsw ? (
        <EndGameBtn
          setIsEndGame={setIsEndGame}
          setGameMode={setGameMode}
          getChances={getChances}
        />
      ) : repeatLevel ? (
        <RepeatLevelBtn
          getRandomNumbCat={getRandomNumbCat}
          setRepeatLevel={setRepeatLevel}
          getChances={getChances}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Gameplay;

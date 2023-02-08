import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { nanoid } from "nanoid";
import Options from "./Options";
import NextLevelBtn from "./NextLevelBtn";
import Score from "./Score";
import Health from "./Health";
import Level from './Level';
import Difficulty from "./Difficulty";

const Gameplay = ({
  type,
  possibleLevels,
  isGameOver,
  setIsGameOver,
  isEndGame,
  setIsEndGame,
  setGameMode
}) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const id = nanoid();
  const [amount, setAmount] = useState(1);
  const [difficultyLevel, setDifficultyLevel] = useState("hard");
  const [nextLevel, setNextLevel] = useState(false);
  const [randomCategory, setRandomCategory] = useState(10);
  const [getPoint, setGetPoint] = useState(0);
  const [level, setLevel] = useState(1);
  const [pointDifficulty, setPointDifficulty] = useState(5);
  const [health, setHealth] = useState(["❤️", "❤️", "❤️"]);

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
          id: id,
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
    if (isEndGame === false || isGameOver === false) {
      fetchQuestionData();
      getPointDifficulty();
    }
    endGame()
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
    setNextLevel(true);
  };

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

  const endGame = () => {
    if (level > possibleLevels){
      setIsEndGame(true);
      setGameMode(false)
    } else if (getPoint < -5){
      setIsGameOver(true);
      setGameMode(false)
    }
  };


  return (
    <div>
      <div>
        <Score key={nanoid()} getPoint={getPoint} />
        {questionAnswer.map((quest) => (
          <p key={id}>{quest.category}</p>
        ))}
        <Level level={level} possibleLevels={possibleLevels} />
        <Difficulty difficultyLevel={difficultyLevel} />
        <Health health={health} />
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
          setDifficultyLevel={setDifficultyLevel}
          setNextLevel={setNextLevel}
          setLevel={setLevel}
          setRandomCategory={setRandomCategory}
          questionAnswer={questionAnswer}
          getPointDifficulty={getPointDifficulty}
          isEndGame={isEndGame}
          isGameOver={isGameOver}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Gameplay;

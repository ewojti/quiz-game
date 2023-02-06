import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { nanoid } from "nanoid";
import Options from "./Options";
import NextLevelBtn from "./NextLevelBtn";
import Score from "./Score";
import Health from "./Health";

const QuestionList = ({ type }) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const id = nanoid()
  let levels = ["easy", "medium", "hard"];
  const [amount, setAmount] = useState(1)
  const [difficultyLevel, setDifficultyLevel] = useState(levels[0]);
  const [nextLevel, setNextLevel] = useState(false)
  const [randomCategory, setRandomCategory] = useState(10)
  const [getPoint, setGetPoint] = useState(0);
  const [level, setLevel] = useState(1)

  useEffect(() => {
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
        console.log(randomCategory);
      };
    fetchQuestionData();
  }, [randomCategory]);
  
    const handleSelectAnswer = (questionId, selectedAnswer) => {
      setQuestionAnswer((prevQuestionAnswer) =>
      prevQuestionAnswer.map((option) =>
      option.id === questionId
      ? { ...option, selectedAnswer: selectedAnswer, showAnswer: true}
      : option
      )
      );
      setTimeout(() => {
      }
      ,2000)
      score(selectedAnswer)
        setNextLevel(true)
    };

      const score = (selected) => {
        
          questionAnswer.map((quest) => {
            quest.answer === selected
              ? setGetPoint((prevGetPoint) => prevGetPoint+=1)
              : setGetPoint((prevGetPoint) => (prevGetPoint-=1))
          })
        }
      

  return (
    <div>
      <div>
        <Score key={nanoid()} getPoint={getPoint} />
        {questionAnswer.map((quest) => (
          <p key={id}>{quest.category}</p>
        ))}
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
          levels={levels}
          setDifficultyLevel={setDifficultyLevel}
          setNextLevel={setNextLevel}
          setRandomCategory={setRandomCategory}
          questionAnswer={questionAnswer}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionList;

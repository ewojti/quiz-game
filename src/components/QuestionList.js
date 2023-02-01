import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { nanoid } from "nanoid";
import Options from "./Options";

const QuestionList = ({ type }) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const id = nanoid()
  let levels = ["easy", "medium", "hard"];
  const [difficultyLevel, setDifficultyLevel] = useState(levels[0]);
  const [nextLevel, setNextLevel] = useState(false)

  useEffect(() => {
    const fetchQuestionData = async () => {
      const questionData = await fetchData(
        `https://opentdb.com/api.php?amount=1&category=16&difficulty=${difficultyLevel}&type=${type}`
      );
      setQuestionAnswer(
        questionData.results.map((questionItem) => {
          const answer = questionItem.correct_answer;
          const options = [
            ...questionItem.incorrect_answers.map((incorrect) => incorrect),
            answer
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
            selectedAnswer: ''
          };
        })
      );
    };
    fetchQuestionData();
  }, []);
  
    const handleSelectAnswer = (questionId, selectedAnswer) => {
      console.log(questionId);
      console.log(selectedAnswer);
      setNextLevel(true)
      setQuestionAnswer((prevQuestionAnswer) =>
      prevQuestionAnswer.map((option) =>
      option.id === questionId
      ? { ...option, selectedAnswer: selectedAnswer, showAnswer: true}
      : option
      )
      );
    };
    console.log(questionAnswer);
  
  const getNextLevel = () => {
    levels.shift()
    setDifficultyLevel(levels[0])
    setNextLevel(false)
    console.log(questionAnswer)
  }

  return (
    <div>
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
      {nextLevel ? <button onClick={getNextLevel}>Next Level</button>: ''}
    </div>
  );
};

export default QuestionList;

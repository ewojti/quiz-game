import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { nanoid } from "nanoid";
import Options from "./Options";
import NextLevelBtn from "./NextLevelBtn";

const QuestionList = ({ type }) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const id = nanoid()
  let levels = ["easy", "medium", "hard"];
  const [difficultyLevel, setDifficultyLevel] = useState(levels[0]);
  const [nextLevel, setNextLevel] = useState(false)
  const [randomCategory, setRandomCategory] = useState(9)

  useEffect(() => {
    const fetchQuestionData = async () => {
      const questionData = await fetchData(
        `https://opentdb.com/api.php?amount=1&category=${randomCategory}&difficulty=${difficultyLevel}&type=${type}`
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
    fetchQuestionData();
    console.log(questionAnswer);
    console.log(randomCategory);
    //     if (questionAnswer.length > 0) {
    //       setRandomCategory(8);
    //     } 
    // console.log(questionAnswer.category)
  }, [randomCategory]);
  
    const handleSelectAnswer = (questionId, selectedAnswer) => {
      setNextLevel(true)
      setQuestionAnswer((prevQuestionAnswer) =>
        prevQuestionAnswer.map((option) =>
        option.id === questionId
        ? { ...option, selectedAnswer: selectedAnswer, showAnswer: true}
        : option
        )
      );
    };

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

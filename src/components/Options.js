import React, {useState} from 'react'
import { nanoid } from 'nanoid';

const Options = ({
  item,
  handleSelectAnswer
}) => {

  const answerElements = item.options.map((option) => (
    <button key={nanoid()} onClick={()=>handleSelectAnswer(item.id, option)}
    className={`answ ${item.selectedAnswer === option ? "answ-selected disabled" : ""}
      ${item.showAnswer && item.selectedAnswer === item.answer? "answ-correct disabled" : "" }
      ${item.showAnswer && item.selectedAnswer !== item.answer? "answ-incorrect disabled" : ""}
      ${item.showAnswer && item.answer === option && item.selectedAnswer !== item.answer ? "answ-show-correct disabled" : ""}
      `}>
      {option}
    </button>
  ));
  return <div>{answerElements}</div>;
};

export default Options
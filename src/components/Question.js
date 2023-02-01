import React, {useState, useEffect} from "react";
import QuestionList from "./QuestionList";
import NextLevelBtn from "./NextLevelBtn";
import { nanoid } from "nanoid";
import { isElementType } from "@testing-library/user-event/dist/utils";


const Question = (id) => {
      const [trueFalseBtn, setTrueFalseBtn] = useState(false)
      const [threeByThreeBtn, setThreeByThreeBtn] = useState(false);
      const [type, setType] = useState('')

      
      const trueFalseGameplay = () =>{
        setTrueFalseBtn(true);
        setThreeByThreeBtn(false);
        setType("boolean");
      }

      const threeByThreeGameplay = () =>{
        setThreeByThreeBtn(true);
        setTrueFalseBtn(false);
          setType("multiple");
      }

  return (
    <div>
      <button id="trueFalseBtn" onClick={() => trueFalseGameplay()}>
        True/False
      </button>
      <button id="threeByThreeBtn" onClick={() => threeByThreeGameplay()}>
        3 po 3
      </button>
      {trueFalseBtn || threeByThreeBtn ? (
        <QuestionList
          key={nanoid()}
          type={type}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;

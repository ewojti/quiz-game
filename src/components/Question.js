import React, {useState, useEffect} from "react";
import QuestionList from "./QuestionList";
import Menu from "./Menu";
import NextLevelBtn from "./NextLevelBtn";
import Gameplay from "./Gameplay";
import { nanoid } from "nanoid";
import { isElementType } from "@testing-library/user-event/dist/utils";


const Question = (id) => {
      const [startGame, setStartGame] = useState(false)
      const [trueFalseBtn, setTrueFalseBtn] = useState(false)
      const [threeByThreeBtn, setThreeByThreeBtn] = useState(false);
      const [gameplay, setGameplay] = useState(false);

      const [type, setType] = useState('')

  return (
    <div>
      {startGame && gameplay === false ? (
        <Gameplay
          setThreeByThreeBtn={setThreeByThreeBtn}
          setTrueFalseBtn={setTrueFalseBtn}
          setType={setType}
          setGameplay={setGameplay}
        />
      ) : (
        ""
      )}
      {gameplay ? (
        <QuestionList key={nanoid()} type={type} />
      ) : trueFalseBtn === false &&
        threeByThreeBtn === false &&
        startGame === false ? (
        <Menu setStartGame={setStartGame} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;

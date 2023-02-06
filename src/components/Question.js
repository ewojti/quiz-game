import React, {useState} from "react";
import QuestionList from "./QuestionList";
import Menu from "./Menu";
import Gameplay from "./Gameplay";
import { nanoid } from "nanoid";


const Question = (id) => {
      const [startGame, setStartGame] = useState(false)
      const [trueFalseBtn, setTrueFalseBtn] = useState(false)
      const [threeByThreeBtn, setThreeByThreeBtn] = useState(false);
      const [gameplay, setGameplay] = useState(false);
      const [possibleLevels, setPossibleLevels] = useState(5);
      const [type, setType] = useState('')

  return (
    <div>
      {startGame && gameplay === false ? (
        <Gameplay
          setThreeByThreeBtn={setThreeByThreeBtn}
          setTrueFalseBtn={setTrueFalseBtn}
          setType={setType}
          setGameplay={setGameplay}
          setPossibleLevels={setPossibleLevels}
        />
      ) : (
        ''
      )}
      {gameplay ? (
        <QuestionList
          key={nanoid()}
          type={type}
          possibleLevels={possibleLevels}
        />
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

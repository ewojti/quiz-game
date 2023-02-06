import React, {useState} from "react";
import QuestionList from "./QuestionList";
import Menu from "./Menu";
import GameMode from "./GameMode";
import { nanoid } from "nanoid";


const Question = (id) => {
      const [startGame, setStartGame] = useState(false)
      const [trueFalseBtn, setTrueFalseBtn] = useState(false)
      const [threeByThreeBtn, setThreeByThreeBtn] = useState(false);
      const [gameMode, setGameMode] = useState(false);
      const [possibleLevels, setPossibleLevels] = useState(5);
      const [type, setType] = useState('')

  return (
    <div>
      {startGame && gameMode === false ? (
        <GameMode
          setThreeByThreeBtn={setThreeByThreeBtn}
          setTrueFalseBtn={setTrueFalseBtn}
          setType={setType}
          setGameMode={setGameMode}
          setPossibleLevels={setPossibleLevels}
        />
      ) : (
        ''
      )}
      {gameMode ? (
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

import React, {useState} from "react";
import Gameplay from "./Gameplay";
import Menu from "./Menu";
import GameMode from "./GameMode";
import GameOver from "./GameOver";
import EndGame from "./EndGame";
import { nanoid } from "nanoid";


const StartPage = (id) => {
      const [startGame, setStartGame] = useState(false)
      const [trueFalseBtn, setTrueFalseBtn] = useState(false)
      const [threeByThreeBtn, setThreeByThreeBtn] = useState(false);
      const [gameMode, setGameMode] = useState(false);
      const [possibleLevels, setPossibleLevels] = useState(5);
      const [type, setType] = useState('');
      const [isGameOver, setIsGameOver] = useState(false);
      const [isEndGame, setIsEndGame] = useState(false);

  return (
    <div>
      {startGame &&
      gameMode === false &&
      isEndGame === false &&
      isGameOver === false ? (
        <GameMode
          setThreeByThreeBtn={setThreeByThreeBtn}
          setTrueFalseBtn={setTrueFalseBtn}
          setType={setType}
          setGameMode={setGameMode}
          setPossibleLevels={setPossibleLevels}
        />
      ) : (
        ""
      )}
      {gameMode ? (
        <Gameplay
          key={nanoid()}
          type={type}
          possibleLevels={possibleLevels}
          isEndGame={isEndGame}
          setIsEndGame={setIsEndGame}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          gameMode={gameMode}
          setGameMode={setGameMode}
        />
      ) : trueFalseBtn === false &&
        threeByThreeBtn === false &&
        startGame === false ? (
        <Menu setStartGame={setStartGame} />
      ) : isEndGame && gameMode === false ? (
        <EndGame
          setIsGameOver={setIsGameOver}
          setIsEndGame={setIsEndGame}
          setTrueFalseBtn={setTrueFalseBtn}
          setThreeByThreeBtn={setThreeByThreeBtn}
          setStartGame={setStartGame}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default StartPage;

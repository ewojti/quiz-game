import React, {useState} from "react";
import Gameplay from "./Gameplay";
import Menu from "./Menu";
import GameMode from "./GameMode";
import EndGame from "./EndGame";
import { nanoid } from "nanoid";


const StartPage = () => {
      const [startGame, setStartGame] = useState(false);
      const [isGameModeData, setIsGameModeData] = useState(false)
      const [gameMode, setGameMode] = useState(false);
      const [possibleLevels, setPossibleLevels] = useState(5);
      const [difficultyLevel, setDifficultyLevel] = useState();
      const [type, setType] = useState();
      const [amount, setAmount] = useState(3);

      const [isEndGame, setIsEndGame] = useState(false);
      const [getChances, setGetChances] = useState()



  return (
    <div>
      {startGame && gameMode === false && isEndGame === false ? (
        <GameMode
          setIsGameModeData={setIsGameModeData}
          setType={setType}
          setGameMode={setGameMode}
          setPossibleLevels={setPossibleLevels}
          setDifficultyLevel={setDifficultyLevel}
          setGetChances={setGetChances}
          setAmount={setAmount}
        />
      ) : (
        ""
      )}
      {gameMode ? (
        <Gameplay
          key={nanoid()}
          type={type}
          possibleLevels={possibleLevels}
          difficultyLevel={difficultyLevel}
          isEndGame={isEndGame}
          setIsEndGame={setIsEndGame}
          gameMode={gameMode}
          setGameMode={setGameMode}
          getChances={getChances}
          setGetChances={setGetChances}
          amount={amount}
        />
      ) : isGameModeData === false && startGame === false ? (
        <Menu setStartGame={setStartGame} />
      ) : isEndGame && gameMode === false ? (
        <EndGame
          setIsEndGame={setIsEndGame}
          setIsGameModeData={setIsGameModeData}
          setStartGame={setStartGame}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default StartPage;

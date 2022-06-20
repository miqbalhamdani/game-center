import { createContext, useContext, useEffect, useState } from "react";

const RockPaperContext = createContext();

export const RockPaperContextProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [playerPick, setPlayerPick] = useState("");
  const [comPick, setComPick] = useState(""); // rock, paper, scissors
  const [result, setResult] = useState("");

  useEffect(() => {
    runFight();
  }, [playerPick, comPick])

  const runFight = () => {
    if (playerPick) {
      comPlayed();
    }

    if (playerPick && comPick) {
      getResult();
    }
  };

  const comPlayed = () => {
    // 0 - 2
    // 2
    const num = Math.floor(Math.random() * 3);

    // if (num === 0) setComPick('rock');
    // else if (num === 1) setComPick('paper');
    // else if (num === 2) setComPick('scissors');

    const hands = ['rock', 'paper', 'scissors'];
    // num 2
    // hands[2];
    // setComPick('scissors');
    setComPick(hands[num]);
  };

  const getResult = () => {
    if (playerPick === comPick) {
      setResult('draw');
      setPlayerDraw();
      return;
    } else if (
      (playerPick === 'rock' && comPick === 'scissors')
      || (playerPick === 'paper' && comPick === 'rock')
      || (playerPick === 'scissors' && comPick === 'paper')
    ) {
      setResult('win');
      setPlayerWin();
      return;
    } else {
      setResult('lose');
      setPlayerLose();
    }
  };

  const setPlayerWin = () => {
    setPlayerScore(playerScore + 15)

    const totalComScore = comScore < 1 ? 0 : +comScore - 5;
    setComScore(totalComScore - 5)
  }

  const setPlayerDraw = () => {
    setPlayerScore(+playerScore + 5)
    setComScore(+comScore + 5)
  }

  const setPlayerLose = () => {
    const totalPlayerScore = playerScore < 1 ? 0 : +playerScore - 5;
    setPlayerScore(totalPlayerScore)

    setComScore(comScore + 15)
  }

  return (
    <RockPaperContext.Provider
      value={{
        playerScore,
        comScore,
        playerPick,
        setPlayerPick,
        comPick,
        result,
      }}
    >
      {children}
    </RockPaperContext.Provider>
  );
};

export const RockPaper = () => {
  return useContext(RockPaperContext);
};

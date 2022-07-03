import { createContext, useContext, useState } from "react";

const RockPaperContext = createContext();

export const RockPaperContextProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [playerPick, setPlayerPick] = useState("paper");
  const [comPick, setComPick] = useState("paper"); // rock, paper, scissors
  const [result, setResult] = useState("");

  const comPlayed = () => {
    const num = Math.floor(Math.random() * 3);
    const hands = ['rock', 'paper', 'scissors'];

    return hands[num];
  };

  const getResult = (player, com) => {
    if (player === com) {
      return 'draw';
    } else if (
      (player === 'rock' && com === 'scissors')
      || (player === 'paper' && com === 'rock')
      || (player === 'scissors' && com === 'paper')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  };

  const getScore = (playerResult) => {
    let player = playerScore;
    let com = comScore;

    if (playerResult === 'win') {
      player += 15;
      com -= 5;
    }else if (playerResult === 'lose') {
      player -= 5;
      com += 15;
    } else {
      player += 5;
      com += 5;
    }

    return [player, com];
  };

  const handlePlayerPick = async (hand) => {
    // set player pick
    setPlayerPick(hand);

    // set com pick with random function
    const com = await comPlayed();
    setComPick(com);

    // get all result
    const playerResult = await getResult(hand, com);
    setResult(playerResult);

    const [pScore, cScore] = getScore(playerResult);
    setPlayerScore(pScore);
    setComScore(cScore);
  }

  return (
    <RockPaperContext.Provider
      value={{
        playerScore,
        setPlayerScore,
        comScore,
        playerPick,
        comPick,
        result,
        handlePlayerPick,
      }}
    >
      {children}
    </RockPaperContext.Provider>
  );
};

export const RockPaper = () => {
  return useContext(RockPaperContext);
};

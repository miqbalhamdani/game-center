import React from "react";
import { RockPaperContextProvider } from '../../../context/RockPaperScissorsContext';
import "../../../assets/style/pages/rock-paper-scissors.css";
import GamePick from "./GamePick";
import GameFight from "./GameFight";
import GameScore from "./GameScore";

import { getDatabase, ref, child, get } from "firebase/database";
import { useSelector } from "react-redux";
import { RockPaper } from "../../../context/RockPaperScissorsContext";

export default function GameDetail() {
  const userId = useSelector((state) => state.user.profile.id);
  const { setPlayerScore } = RockPaper();

  // useEffect(() => {
  //   playerScore
  // }, []);

  // const playerScore = () => {
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `playing/${userId}/`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setPlayerScore(snapshot.val());
  //         return;
  //       }

  //       setPlayerScore(0);
  //     })
  //     .catch((error) => {
  //       setPlayerScore(0);
  //       console.error(error);
  //     });
  // };

  const style = {
    height: "800px",
    backgroundColor: "#9C835F",
  };

  return (
    <div style={style}>
      <div className="header d-flex align-items-center">
        <div className="header-symbol">Back</div>
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/logo.png")}
          alt="ROCK PAPER SCISSORS"
          height="72"
        />
        <div className="header-text">ROCK PAPER SCISSORS</div>
      </div>

      <RockPaperContextProvider>
        <section className="game">
          {/* Score */}
          <GameScore />

          {/* VS */}
          <GameFight />

          {/* Player Pick */}
          <h2>Please Pick</h2>
          <GamePick />
        </section>
      </RockPaperContextProvider>
    </div>
  );
}

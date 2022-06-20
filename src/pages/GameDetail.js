import React from "react";
import { RockPaperContextProvider } from '../context/RockPaperScissorsContext';
import "../assets/style/pages/rock-paper-scissors.css";
import GamePick from "../components/game-detail/rock-paper-scissors/GamePick";
import GameFight from "../components/game-detail/rock-paper-scissors/GameFight";
import GameScore from "../components/game-detail/rock-paper-scissors/GameScore";

export default function GameDetail() {
  const style = {
    height: "800px",
    backgroundColor: "#9C835F",
  };

  return (
    <div style={style}>
      <div className="header d-flex align-items-center">
        <div className="header-symbol">Back</div>
        <img
          src={require("../assets/img/game-detail/rock-paper-scissors/logo.png")}
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

import React from "react";
import { RockPaper } from "../../../context/RockPaperScissorsContext";

export default function GamePick() {
  const { handlePlayerPick, playerPick } = RockPaper();

  return (
    <div className="player-pick">
      <div
        className={`game-hand ${playerPick === "rock" ? "selected-hand" : ""}`}
        onClick={() => handlePlayerPick("rock")}
      >
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/rock.png")}
          alt="Batu"
        />
      </div>

      <div
        className={`game-hand ${playerPick === "paper" ? "selected-hand" : ""}`}
        onClick={() => handlePlayerPick("paper")}
      >
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/paper.png")}
          alt="Kertas"
        />
      </div>

      <div
        className={`game-hand ${
          playerPick === "scissors" ? "selected-hand" : ""
        }`}
        onClick={() => handlePlayerPick("scissors")}
      >
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/scissors.png")}
          alt="Gunting"
        />
      </div>
    </div>
  );
}

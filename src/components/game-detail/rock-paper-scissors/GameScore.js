import React from "react";
import { RockPaper } from "../../../context/RockPaperScissorsContext";

export default function GameScore() {
  const { playerScore, comScore } = RockPaper();

  return (
    <div className="score">
      <div className="score-player">
        <div className="score__name">PLAYER</div>
        <div className="score__total">{playerScore}</div>
      </div>

      <div className="score-com">
        <div className="score__name">COM</div>
        <div className="score__total">{comScore}</div>
      </div>
    </div>
  );
}

import React from "react";
import { RockPaper } from "../../../context/RockPaperScissorsContext";

export default function GamePick(props) {
  const { setPlayerPick } = RockPaper();

  return (
    <div className="player-pick">
      <div className="game-hand" onClick={() => setPlayerPick("rock")}>
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/rock.png")}
          alt="Batu"
        />
      </div>

      <div className="game-hand" onClick={() => setPlayerPick("paper")}>
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/paper.png")}
          alt="Kertas"
        />
      </div>

      <div className="game-hand" onClick={() => setPlayerPick("scissors")}>
        <img
          src={require("../../../assets/img/game-detail/rock-paper-scissors/scissors.png")}
          alt="Gunting"
        />
      </div>
    </div>
  );
}

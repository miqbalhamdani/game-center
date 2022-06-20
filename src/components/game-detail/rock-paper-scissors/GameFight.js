import React from 'react'
import { RockPaper } from "../../../context/RockPaperScissorsContext";

export default function GameFight() {
  const { playerPick, comPick, result } = RockPaper();

  return (
    <div className="vs">
      {comPick && <div className="game-hand">
        <img
          src={require(`../../../assets/img/game-detail/rock-paper-scissors/${playerPick}.png`)}
          alt="Gunting"
        />
      </div>}

      <div className="vs__text">{result}</div>

      {comPick && <div className="game-hand">
        <img
          src={require(`../../../assets/img/game-detail/rock-paper-scissors/${comPick}.png`)}
          alt="Kertas"
        />
      </div>}
    </div>
  )
}

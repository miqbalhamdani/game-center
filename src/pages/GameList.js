import React, { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";

import "../assets/style/pages/game-list.css";

import { getDatabase, ref, child, get } from "firebase/database";
import { useSelector } from "react-redux";
import CardGame from "../components/game-list/CardGame";

export default function GameList() {
  const userId = useSelector((state) => state.user.profile.id);

  const [games, setGames] = useState([]);
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    if (games.length < 1) {
      fetchGames();
    }

    if (playing.length < 1) {
      fetchPlaying();
    }
  }, [userId]);

  const fetchGames = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "games"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGames(snapshot.val());
          return;
        }

        setGames([]);
      })
      .catch((error) => {
        setGames([]);
        console.error(error);
      });
  };

  const fetchPlaying = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `playing/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPlaying(snapshot.val());
          return;
        }

        setPlaying([]);
      })
      .catch((error) => {
        setPlaying([]);
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container game-list">
        <div className="game-list__title">
          <h1>Game</h1>
        </div>

        <div className="game-list__content">
          {Object.keys(games).map((key) => (
            <CardGame
              key={key}

              // games.chess
              // games.rock-paper-scissors
              // games.uno

              // "uno": {
              //   "category": "card",
              //   "image": "uno.jpeg",
              //   "name": "UNO"
              // }
              game={games[key]}

              // playing.chess.score // 10
              // playing.rock-paper-scissors // ""
              // playing.uno.score // 50
              score={playing[key]?.score ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";
import "../assets/style/pages/game-list.css"

import { getDatabase, ref, child, get } from "firebase/database";
import CardGame from "../components/game-list/CardGame";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'games')).then((snapshot) => {
      if (snapshot.exists()) {
        setGames(snapshot.val());
        return;
      }

      setGames([]);
    }).catch((error) => {
      setGames([]);
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
          {
            games.map((game, id) => (
              <CardGame
                key={id}
                game={game}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

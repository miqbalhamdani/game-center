import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Badge } from "reactstrap";

export default function CardGame({ game, score }) {
  const storage = getStorage();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, `games/${game.image}`))
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(`failed to get url from image ${game.image}`, error);
        return "";
      });
  }, [game, storage]);

  const gameBadge = () => (
    score && (
      <div className="game-card__badge">
        <Badge color="dark" pill>
          Total Score: {score}
        </Badge>
      </div>
    )
  );

  return (
    <div className="game-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      {gameBadge()}

      <div className="game-card__title game-card__title--hide">
        <h2>{game.name}</h2>
        <span>{game.category}</span>
      </div>
    </div>
  );
}

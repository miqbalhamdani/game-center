import React from 'react'
import { RockPaper, Chess, Uno } from "../components/game-detail"
import { useParams } from "react-router-dom";

export default function GameDetail() {
  let { slug } = useParams();

  const glossary = {
    'rock-paper-scissors': <RockPaper />,
    'chess': <Chess />,
    'uno': <Uno />,
  };

  return (glossary[slug]);
}

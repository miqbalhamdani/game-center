import React from 'react'
import { Link } from "react-router-dom";

import '../assets/style/pages/home.css';

import Navbar from '../components/common/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="headline">
        <div className="headline-content">
          <h1>Play Traditional Game</h1>
          <h3>Experience new traditional game play</h3>

          <Link className="navbar-brand" to="/game-list">
            <button>Play Now</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

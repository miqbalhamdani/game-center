import firebase from "./config/firebase";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/app.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game-list" element={<GameList />} />
        <Route path="/game-detail" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

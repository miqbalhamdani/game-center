import firebase from "./config/firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";

import { useSelector } from "react-redux";

function App() {
  const toast = useSelector((state) => state.user.toast);

  const style = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    zIndex: '5',
  }

  const successAlert = () =>
    toast.message && (
      <Toast style={style}>
        <ToastHeader className={`bg-${toast.type} text-light`}>{toast.type}</ToastHeader>
        <ToastBody>{toast.message}</ToastBody>
      </Toast>
    );

  return (
    <>
      {successAlert()}

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
    </>
  );
}

export default App;

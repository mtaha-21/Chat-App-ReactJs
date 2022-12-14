import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* <Sidebar />
        <Chat /> */}
          <Router>
            <Sidebar />
            <Routes>
              <Route exact path="/rooms/:roomId" element={<Chat />} />
              {/* <Route path="/app" element={<Sidebar />}>
              <Route path="room" element={<Chat />} />
            </Route> */}
              <Route path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

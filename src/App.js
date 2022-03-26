import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") setMode("light");
    else setMode("dark");
  };
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="" />}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;


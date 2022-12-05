import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [isDarkMode, toggleMode] = useState(true);

  function toggleDarkMode() {
    toggleMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}

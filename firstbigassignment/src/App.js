import { useState } from "react";

import MainFrame from "./components/MainFrame/MainFrame.js";
import Header from "./components/MainFrame/Header/Header.js";

import ExpenseContainer from "./components/MainFrame/ExpenseContainer/ExpenseContainer.js";

import "./App.css";

function App() {
  const [header, setHeader] = useState(false);
  function headerHandler() {
    setHeader(!header);
  }

  return (
    <MainFrame>
      <Header clickHandler={headerHandler} currentState={header} />

      <ExpenseContainer />
    </MainFrame>
  );
}

export default App;

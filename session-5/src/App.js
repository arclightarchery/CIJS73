import { useState } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const circle = document.getElementsByClassName("circle");

  function onNext() {
    if (currentIndex >= 2) {
      setCurrentIndex(currentIndex - 2);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function onBack() {
    if (currentIndex <= 0) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <MainContent>
      <div>
        <ButtonContainer>
          <Button value="Back" onClick={onBack} />
          <Button value="Next" onClick={onNext} />
        </ButtonContainer>
        <CircleContainer>
          <Light color="red" active={currentIndex === 0 ? "active" : null} />
          <Light color="yellow" active={currentIndex === 1 ? "active" : null} />
          <Light
            color="light-green"
            active={currentIndex === 2 ? "active" : null}
          />
        </CircleContainer>
      </div>
    </MainContent>
  );
}

function MainContent({ children }) {
  return <div className="main-content">{children}</div>;
}

function ButtonContainer({ children }) {
  return <div className="button-container">{children}</div>;
}

function Button({ value, onClick }) {
  return (
    <button
      className="button"
      id={`${value.toLowerCase()}-btn`}
      onClick={onClick}>
      {value}
    </button>
  );
}

function CircleContainer({ children }) {
  return <div className="circle-container">{children}</div>;
}

function Light({ color, active }) {
  return <div className={`circle ${color} ${active || ""}`}></div>;
}

export default App;

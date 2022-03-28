import { useState } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const circle = document.getElementsByClassName("circle");

  function onNext() {
    if (circle[currentIndex].classList.contains("active")) {
      console.log(circle[currentIndex].classList.contains("active"));
      circle[currentIndex].classList.remove("active");
      setCurrentIndex(currentIndex + 1);
    }
    circle[currentIndex].classList.add("active");
  }

  function onBack() {
    if (circle[currentIndex].classList.contains("active")) {
      circle[currentIndex].classList.remove("active");
      setCurrentIndex(currentIndex - 1);
      if (currentIndex <= 0) {
        setCurrentIndex(currentIndex + 2);
      }
    }
    circle[currentIndex].classList.add("active");
  }

  return (
    <MainContent>
      <div>
        <ButtonContainer>
          <Button value="Back" onClick={onBack} />
          <Button value="Next" onClick={onNext} />
        </ButtonContainer>
        <CircleContainer>
          <Light color="red active" />
          <Light color="yellow" />
          <Light color="light-green" />
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

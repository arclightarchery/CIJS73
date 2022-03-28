import "./App.css";
import Checkbox from "./Checkbox.js";
import Input from "./Input.js";
import Wrap from "./Wrap.js"

function App() {
  return (
    <div className="main-content">
      <Wrap>
        <Input />
        <Checkbox id="task1" value="Clean your bedroom" />
        <Checkbox id="task2" value="Buy some milk" />
        <Checkbox id="task3" value="Jogging" />
        <Checkbox id="task4" value="Learn React" />
        <Checkbox id="task5" value="Doing Exercises" />
      </Wrap>
    </div>
  );
}

export default App;

import "./InputContainer.css"


import InputGroup from "./InputGroup/InputGroup.js";

export default function InputContainer() {
    return (
      <div className="input-container">
        <InputGroup label="Name" placeholder="Enter name here ..." />
        <InputGroup label="Amount" placeholder="Enter amount here ..." />
        <InputGroup label="Date" placeholder="dd/mm/yyyy" />
      </div>
    );
}
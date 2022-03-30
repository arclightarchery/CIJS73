import "./DropdownContainer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import YearSelector from "./YearSelector/YearSelector.js";

export default function DropdownContainer() {
    return (
      <div className="dropdown-container">
        <FontAwesomeIcon icon={faCaretDown} className="dropdown-btn" />
        <YearSelector />
      </div>
    );
}
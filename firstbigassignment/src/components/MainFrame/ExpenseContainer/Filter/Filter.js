import "./Filter.css";

import DropdownContainer from "./DropdownContainer/DropdownContainer.js"

export default function Filter() {
    return (
      <div className="filter">
        <span className="filter-by-year">Filter by year</span>
         <DropdownContainer />
      </div>
    );
}
import "./ExpenseContainer.css";

import Filter from "./Filter/Filter.js"
import ChartContainer from "./ChartContainer/ChartContainer.js";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

export default function ExpenseContainer() {
    return (
      <div className="expense-container">
        <Filter />
        <ChartContainer />
        <ExpenseItem
          month="January"
          year="2022"
          day="16"
          title="Some Book"
          money="$ 50"
        />
        <ExpenseItem
          month="October"
          year="2022"
          day="10"
          title="Electricity Bill"
          money="$ 75"
        />
        <ExpenseItem
          month="May"
          year="2022"
          day="8"
          title="New Bike"
          money="$ 100"
        />
      </div>
    );
}
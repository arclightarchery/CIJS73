import "./ExpenseItem.css";

import Date from "./Date/Date.js"
import Title from "./Title/Title.js"
import Amount from "./Amount/Amount.js"

export default function ExpenseItem({ month, year, day, title, money }) {
  return (
    <div className="expense-item">
      <Date month={month} year={year} day={day} />
      <Title title={title} />
      <Amount money={money} />
    </div>
  );
}

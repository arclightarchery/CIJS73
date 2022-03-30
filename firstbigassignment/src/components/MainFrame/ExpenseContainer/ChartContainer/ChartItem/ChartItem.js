import "./ChartItem.css";

import Bar from "./Bar/Bar.js";

export default function ChartItem() {
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const renderMonthList = monthList.map((month) => (
    <li className="chart-item" key={month}>
      <Bar />
      <span className={`chart-month ${month.toLowerCase()}`} >{month}</span>
    </li>
  ));
  return <>{renderMonthList}</>;
}

import "./ChartContainer.css";

import ChartItem from "./ChartItem/ChartItem.js"
export default function ChartContainer() {
    return (
      <ul className="chart-container">
        <ChartItem />
      </ul>
    );
}
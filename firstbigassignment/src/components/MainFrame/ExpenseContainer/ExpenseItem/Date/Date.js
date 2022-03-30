import "./Date.css";

export default function Date({ month, year, day }) {
    return <div className="date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
    </div>
}
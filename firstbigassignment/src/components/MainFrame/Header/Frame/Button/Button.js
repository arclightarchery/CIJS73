import "./Button.css";
export default function Button({ classname, value, onClick }) {
    return <button className={`btn ${classname}`} onClick={onClick}>{value}</button>
}
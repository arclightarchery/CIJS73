export default function Button({ onClick, value }) {
    return <button className="btn" onClick={onClick}>{value}</button>
}
import "./InputGroup.css";
export default function InputGroup({ label, placeholder }) {
    return (
      <div className="input-group">
        <span className="label">{label}</span>
        <input type="text" className="input" placeholder={placeholder}></input>
      </div>
    );
}
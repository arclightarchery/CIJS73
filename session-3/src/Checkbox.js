function Checkbox({ id, value }) {
    return (
      <div className="checkbox-container">
        <input type="checkbox" id={id}></input>
        <label for="task1" className="checkbox-value">{value}</label>
      </div>
    );
}

export default Checkbox;
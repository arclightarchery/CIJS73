function Button({ type, className, onClick, text }) {
  return (
    
      <button type={type} className={`button ${className}`} onClick={onClick}>
        {text}
      </button>

    
  );
}

export default Button
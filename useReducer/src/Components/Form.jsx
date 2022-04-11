function Form({ children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='form'>
      <fieldset className='fieldset'>
        <legend>React To Do List</legend>
        {children}
      </fieldset>
    </form>
  );
}

export default Form;

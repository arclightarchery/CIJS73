import React, { useState, useRef } from 'react';
import ButtonContainer from './ButtonContainer';

function Task({ text, handleDelete }) {
  const [isEditable, setIsEditable] = useState(false);
  const taskRef = useRef();
  const handleEdit = () => {
    setIsEditable(!isEditable);
    taskRef.current.focus();
  };

  const handleConfirm = () => {
    setIsEditable(!isEditable);
  }
  return (
    <li className='task' ref={taskRef} contentEditable={isEditable}>
      <div className='round'>
        {isEditable ? null : (
          <>
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox'></label>
          </>
        )}
        <span className='strikethrough'>{text}</span>
      </div>
      {isEditable ? (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' onClick={handleConfirm}>
          <path d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z' />
        </svg>
      ) : (
        <ButtonContainer>
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              onClick={handleEdit}>
              <path d='M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              onClick={handleDelete}>
              <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z' />
            </svg>
          </>
        </ButtonContainer>
      )}
    </li>
  );
}

export default Task;

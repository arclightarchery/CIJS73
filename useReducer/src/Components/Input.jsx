import React from 'react';

function Input({ value, onChange, forwardedRef }) {
  return (
    <input
      type='text'
      className='input'
      value={value}
      placeholder='Add something...'
      onChange={onChange}
      ref={forwardedRef}
    />
  );
}

export default Input;

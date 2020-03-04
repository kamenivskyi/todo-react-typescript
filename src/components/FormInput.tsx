import React, { useState } from 'react';

const FormInput = () => {
  const [title, setTitle] = useState<string>('');

  return (
    <div className='input-field'>
      <input type='text' id='title' />
      <label htmlFor='title' className='active'>
        Введіть назви задачі
      </label>
    </div>
  );
};

export default FormInput;

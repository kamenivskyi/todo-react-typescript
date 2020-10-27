import React, { useState } from 'react';

interface Props {
  addTodo(title: string): void
}

const FormInput: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className='input-field'>
      <input
        type='text'
        id='title'
        placeholder='Введіть назву задачі'
        value={title}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor='title' className='active'>
        Введіть назву задачі
      </label>
    </div>
  );
};

export default FormInput;

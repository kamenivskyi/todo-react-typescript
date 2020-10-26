import React, { useState } from 'react';

interface FormInputProps {
  onAddTodo(title: string): void;
}

const FormInput: React.FC<FormInputProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAddTodo(title);
      
      // console.log(title);
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

import React, { useState } from 'react';

import Navbar from './components/Navbar';
import FormInput from './components/FormInput';

import 'materialize-css/dist/css/materialize.min.css';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = value => {
    // setTodos({});
  };

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: '2rem' }}>
        <FormInput />
      </div>
    </>
  );
};

export default App;

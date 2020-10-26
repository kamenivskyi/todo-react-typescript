import React, { useState } from 'react';

import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import { ITodo } from './interfaces';

import 'materialize-css/dist/css/materialize.min.css';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddTodo = (title: string) => {
    if (title.trim().length > 3) {
      const newTodo = createNewTodo(title);
      
      setTodos(prev => [...prev, newTodo]);
    } else {
      alert('New todo length must be greater than 3!')
    }

  };

  const createNewTodo = (title: string) => {
    const newTodo: ITodo = { 
      title,
      id: Math.random(),
      important: false,
      done: false,
    };

    return newTodo; 
  }

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: '2rem' }}>
        <FormInput onAddTodo={onAddTodo} />
        <ul className="collection">
          {todos.map((todo: ITodo) => {
            console.log(todo);
            return (
              <li className='collection-item' key={todo.id}>{todo.title}</li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

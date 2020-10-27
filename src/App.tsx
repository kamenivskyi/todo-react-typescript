import React, { useState } from 'react';

import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import ListItems from './components/ListItems';
import { ITodo } from './interfaces';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
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

  const deleteTodo = (id: number) => {
    const shouldDelete = window.confirm('Ви справді хочете видалити цю задачу?');
    
    if (shouldDelete) {
      setTodos(() => todos.filter(todo => todo.id !== id));
    }
  }

  const toggleDone = (id: number) => {
    setTodos(prev => prev.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    }))
  }

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: '2rem' }}>
        <FormInput addTodo={addTodo} />
        <ListItems 
          todos={todos}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      </div>
    </>
  );
};

export default App;

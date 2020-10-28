import React, { useState, useEffect } from 'react'

import FormInput from '../components/FormInput';
import ListItems from '../components/ListItems';
import { ITodo } from '../interfaces';

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    
  }, [todos]);

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

  const toggleProperty = (arr: ITodo[], id: number, propName: string) => {
    return arr.map((item: any) => {
      if (item.id === id) {
        item[propName] = !item[propName]
      }

      return item;
    })
  }

  const toggleDone = (id: number) => {
    const newArr = toggleProperty(todos, id, 'done');

    setTodos(newArr);
  }

  const toggleImportant = (id: number) => {
    const newArr = toggleProperty(todos, id, 'important');

    setTodos(newArr);
  }
  return (
    <>
      <FormInput addTodo={addTodo} />
      <ListItems 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
        toggleImportant={toggleImportant}
      />
    </>
  )
}

export default Home

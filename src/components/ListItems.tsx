import React from 'react';
import ListItem from './ListItem/ListItem';

import { ITodo } from '../interfaces';

type TListItems = {
  todos: ITodo[]
  deleteTodo(id: number): void 
  toggleDone(id: number): void
  toggleImportant(id: number): void
}

const ListItems: React.FC<TListItems> = ({ todos, deleteTodo, toggleDone, toggleImportant }) => {
  return (
    <ul className="collection" style={{ border: 'none' }}>
      {todos.map((todo: ITodo) => (
        <ListItem 
          deleteTodo={deleteTodo}
          toggleImportant={toggleImportant}
          toggleDone={toggleDone}  
          key={todo.id} 
          {...todo} 
        />
        )
      )}
    </ul>
  )
}

export default ListItems;
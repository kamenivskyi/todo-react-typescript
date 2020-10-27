import React from 'react';
import ListItem from './ListItems/ListItem';

import { ITodo } from '../interfaces';

type ListItemsProps = {
  todos: ITodo[]
  deleteTodo(id: number): void 
  toggleDone(id: number): void
}

const ListItems: React.FC<ListItemsProps> = ({ todos, deleteTodo, toggleDone }) => {
  return (
    <ul className="collection">
      {todos.map((todo: ITodo) => (
        <ListItem 
          deleteTodo={deleteTodo}
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
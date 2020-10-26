import React from 'react';
import { ITodo } from '../interfaces';
import ListItem from './ListItem';

interface ListItemsProps {
  todos: ITodo[]
  deleteTodo(id: number): void 
}

const ListItems: React.FC<ListItemsProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="collection">
      {todos.map(({ ...props }: ITodo) => (
        <ListItem deleteTodo={deleteTodo} {...props} />
        )
      )}
    </ul>
  )
}

export default ListItems;
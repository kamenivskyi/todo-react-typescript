import React from 'react';
import { ITodo } from '../interfaces';

interface ListItemsProps {
  todos: ITodo[]
  deleteTodo(id: number): void 
}

const ListItems: React.FC<ListItemsProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="collection">
      {todos.map(({ id, title }: ITodo) => (
        <li className='collection-item' key={id}>
          <label>
            <input type="checkbox" name="" id="" />
            <span>{title}</span>
          </label>
          <a 
            onClick={() => deleteTodo(id)} 
            href="#" 
            className="secondary-content"
          >
            <i className="material-icons">delete</i>
          </a>
        </li>
        )
      )}
    </ul>
  )
}

export default ListItems;
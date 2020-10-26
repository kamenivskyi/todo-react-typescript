import React from 'react';

interface Props {
  id: number
  title: string
  important: boolean
  done: boolean
  deleteTodo(id: number): void
};

const ListItem: React.FC<Props> = ({ id, title, deleteTodo }) => {
  return (
    <li className='collection-item' key={id}>
      <label>
        <input type="checkbox" />
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
};

export default ListItem;

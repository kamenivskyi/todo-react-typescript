import React from 'react';

import './ListItem.css';

interface Props {
  id: number
  title: string
  important: boolean
  done: boolean
  deleteTodo(id: number): void
  toggleDone(id: number): void
};

const ListItem: React.FC<Props> = ({ id, title, done, deleteTodo, toggleDone }) => {
  return (
    <li className='collection-item'>
      <label>
        <input onChange={() => toggleDone(id)} type="checkbox" checked={done} />
        <span className={done ? 'done': ''}>{title}</span>
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

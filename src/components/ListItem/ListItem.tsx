import React from 'react';

import './ListItem.css';

interface Props {
  id: number
  title: string
  important: boolean
  done: boolean
  deleteTodo(id: number): void
  toggleDone(id: number): void
  toggleImportant(id: number): void
};

const ListItem: React.FC<Props> = ({ id, title, done, important, deleteTodo, toggleDone, toggleImportant }) => {
  const classes = [];
  if (done) {
    classes.push('done')
  } 
  if (important) {
    classes.push('important');
  }

  return (
    <li className='collection-item'>
      <label>
        <input onChange={() => toggleDone(id)} type="checkbox" checked={done} />
        <span className={classes.join(' ')}>{title}</span>
      </label>
      <div className="secondary-content">
        <a 
          onClick={() => deleteTodo(id)} 
          href="#" 
        >
          <i className="material-icons red-text">delete</i>
        </a>
        <a href="#" onClick={() => toggleImportant(id)}>
          <i className="material-icons">priority_high</i>
        </a>
      </div>
    </li>
  )
};

export default ListItem;

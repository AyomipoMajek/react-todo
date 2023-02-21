import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, /* handleChange, */ delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
      <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
    </li>
  );
};

export default TodoItem;
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, setTodos, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} />
    ))}
  </ul>
);
export default TodosList;
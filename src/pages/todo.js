import { useEffect } from "react";
import useUser from "../hooks/user/useUser";
import useTodo from "../hooks/useTodo";

const Todo = () => {
  const { redirectNotLoginUser } = useUser();
  const { setTodosData, todos, handleAddTodoClick, newTodo, setNewTodo } =
    useTodo();

  useEffect(() => {
    redirectNotLoginUser();
    setTodosData();
  }, []);

  return (
    <div>
      Todo Page
      <input
        data-testid="new-todo-input"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button data-testid="new-todo-add-button" onClick={handleAddTodoClick}>
        추가
      </button>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.isCompleted} />
              <span>{todo.todo}</span>
            </label>
          </li>
        ))}
    </div>
  );
};

export default Todo;

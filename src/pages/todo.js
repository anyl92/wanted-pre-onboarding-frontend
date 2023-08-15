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

  console.log(todos);

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
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 2</span>
        </label>
      </li>
    </div>
  );
};

export default Todo;

import { useEffect } from "react";
import useUser from "../hooks/user/useUser";
import useTodo from "../hooks/useTodo";

const Todo = () => {
  const { redirectNotLoginUser } = useUser();
  const {
    handleGetTodos,
    todos,
    handleAddTodo,
    newTodo,
    setNewTodo,
    handleIsCompleteChange,
    handleDeleteTodo,
    editTodo,
    handleEditTodoBtnsClick,
    handleEditTodoChange,
  } = useTodo();

  useEffect(() => {
    if (redirectNotLoginUser()) return;
    handleGetTodos();
  }, []);

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (!e.target) return;
      const target = e.target;
      if (
        target.dataset.testid === "submit-button" ||
        target.dataset.testid === "modify-input"
      ) {
        return;
      } else {
        handleEditTodoBtnsClick(undefined, "수정");
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div>
      <h2>TODO</h2>
      <p>
        <input
          data-testid="new-todo-input"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button data-testid="new-todo-add-button" onClick={handleAddTodo}>
          추가
        </button>
      </p>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onChange={(e) => handleIsCompleteChange(e, todo)}
              />
              <span>{todo.todo}</span>
            </label>

            {todo.id === editTodo.id && editTodo.opened && (
              <>
                <input
                  data-testid="modify-input"
                  onChange={(e) => handleEditTodoChange(e, todo)}
                />
                <button
                  data-testid="submit-button"
                  onClick={() => handleEditTodoBtnsClick(todo.id, "제출")}
                >
                  제출
                </button>
                <button
                  data-testid="cancel-button"
                  onClick={() => handleEditTodoBtnsClick(todo.id, "취소")}
                >
                  취소
                </button>
              </>
            )}
            {(todo.id !== editTodo.id || !editTodo.opened) && (
              <>
                <button
                  data-testid="modify-button"
                  onClick={() => handleEditTodoBtnsClick(todo.id, "수정")}
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
    </div>
  );
};

export default Todo;

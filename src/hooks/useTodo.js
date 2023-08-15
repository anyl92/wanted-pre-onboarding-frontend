import { useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../utils/api/todo";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const setTodosData = () => {
    getTodos().then((res) => {
      if (res.status === 200) {
        setTodos(res.data);
      } else {
        alert("에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const handleAddTodoClick = () => {
    const body = {
      todo: newTodo,
    };
    createTodo(body).then((res) => {
      if (res.status !== 201) {
        alert("에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const handleIsCompleteChange = (e, todo) => {
    const body = {
      todo: todo.todo,
      isCompleted: e.target.checked,
    };
    updateTodo(todo.id, body).then((res) => {
      if (res.status !== 200) {
        alert("에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const handleDeleteTodoClick = (id) => {
    deleteTodo(id).then((res) => {
      if (res.status !== 204) {
        alert("에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  return {
    todos,
    setTodosData,
    handleAddTodoClick,
    newTodo,
    setNewTodo,
    handleIsCompleteChange,
    handleDeleteTodoClick,
  };
};

export default useTodo;

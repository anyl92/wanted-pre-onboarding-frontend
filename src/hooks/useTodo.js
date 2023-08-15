import { useState } from "react";
import { getTodos, createTodo } from "../utils/api/todo";

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
      isCompleted: false,
    };
    createTodo(body).then((res) => {
      if (res.status !== 201) {
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
  };
};

export default useTodo;

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
  const [editTodo, setEditTodo] = useState({});

  const handleGetTodos = () => {
    getTodos().then((res) => {
      if (res.status === 200) {
        setTodos(res.data);
      } else {
        alert("TODO 조회 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const handleAddTodo = async () => {
    const body = {
      todo: newTodo,
    };
    await createTodo(body).then((res) => {
      if (res.status !== 201) {
        alert("TODO 추가 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
    handleGetTodos();
  };

  const handleIsCompleteChange = (e, todo) => {
    const body = {
      todo: todo.todo,
      isCompleted: e.target.checked,
    };
    handleUpdateTodo(todo.id, body);
  };

  const handleUpdateTodo = async (id, body) => {
    await updateTodo(id, body).then((res) => {
      if (res.status !== 200) {
        alert("TODO 수정 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
    handleGetTodos();
  };

  const handleEditTodoChange = (e, todo) => {
    setEditTodo({
      id: todo.id,
      todo: e.target.value,
      isCompleted: todo.isCompleted,
      opened: true,
    });
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id).then((res) => {
      if (res.status !== 204) {
        alert("TODO 삭제 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
      return true;
    });
    handleGetTodos();
  };

  const handleEditTodoBtnsClick = (id, text) => {
    switch (text) {
      case "수정":
        setEditTodo({ id: id, opened: true });
        break;
      case "제출":
        handleUpdateTodo(id, editTodo);
        setEditTodo({ id: undefined, opened: false });
        break;
      case "취소":
        setEditTodo((prev) => ({ ...prev, opened: false }));
        break;
      default:
        break;
    }
  };

  return {
    todos,
    handleGetTodos,
    handleAddTodo,
    newTodo,
    setNewTodo,
    handleIsCompleteChange,
    handleDeleteTodo,
    editTodo,
    handleEditTodoBtnsClick,
    handleEditTodoChange,
  };
};

export default useTodo;

import instance from "../axios";

export const createTodo = async (body) => {
  try {
    return await instance.post(`/todos`, body);
  } catch (err) {
    throw err;
  }
};

export const getTodos = async () => {
  try {
    return await instance.get(`/todos`);
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (id, body) => {
  try {
    return await instance.put(`/todos/${id}`, body);
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async (id) => {
  try {
    return await instance.delete(`/todos${id}`);
  } catch (err) {
    throw err;
  }
};

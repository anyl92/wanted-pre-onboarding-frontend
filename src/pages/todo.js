import { useEffect } from "react";
import useUser from "../hooks/user/useUser";
import useTodo from "../hooks/useTodo";

const Todo = () => {
  const { redirectNotLoginUser } = useUser();
  const { setTodosData, todos } = useTodo();

  useEffect(() => {
    redirectNotLoginUser();
    setTodosData();
  }, []);

  console.log(todos);

  return (
    <div>
      Todo Page
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

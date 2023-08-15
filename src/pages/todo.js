import { useEffect } from "react";
import useUser from "../hooks/user/useUser";

const Todo = () => {
  const { redirectNotLoginUser } = useUser();

  useEffect(() => {
    redirectNotLoginUser();
  }, []);

  return (
    <div>
      Todo Page
      <h2>dhkfkffkfkf</h2>
    </div>
  );
};

export default Todo;

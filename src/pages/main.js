import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const isLogined = Boolean(localStorage.getItem("user_token"));

  return (
    <div>
      <h2>안녕하세요? TODO를 작성해봅시다.</h2>

      {isLogined ? (
        <h6>
          이미 로그인 되어 있으시군요.{" "}
          <button onClick={() => navigate("/todo")}>작성 하러 가기</button>
        </h6>
      ) : (
        <h6>
          <button onClick={() => navigate("/signup")}>회원가입</button>
          <button onClick={() => navigate("/signin")}>로그인</button>
        </h6>
      )}
    </div>
  );
};

export default Main;

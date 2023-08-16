import { useEffect } from "react";
import useUser from "../../hooks/user/useUser";
import "../../styles/user.css";

const Signup = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    checkAllValid,
    handleSignupClick,
    redirectAlreadyLoginUser,
    handleSignupEnter,
  } = useUser();

  useEffect(() => {
    redirectAlreadyLoginUser();
  }, []);

  return (
    <div>
      <h2>회원가입</h2>
      <div className="input-box">
        <span>이메일: </span>
        <input
          data-testid="email-input"
          type="text"
          onChange={handleEmailChange}
          onKeyUp={handleSignupEnter}
          value={email}
        />
      </div>
      <div className="input-box">
        <span>비밀번호: </span>
        <input
          data-testid="password-input"
          type="password"
          onChange={handlePasswordChange}
          onKeyUp={handleSignupEnter}
          value={password}
        />
      </div>
      <button
        data-testid="signup-button"
        onClick={handleSignupClick}
        disabled={!checkAllValid}
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;

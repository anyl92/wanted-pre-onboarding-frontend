import { useEffect } from "react";
import useUser from "../../hooks/user/useUser";
import "../../styles/user.css";

const Signin = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    checkAllValid,
    handleSigninClick,
    redirectAlreadyLoginUser,
    handleSigninEnter,
  } = useUser();

  useEffect(() => {
    redirectAlreadyLoginUser();
  }, []);

  return (
    <div>
      <h2>로그인</h2>
      <div className="input-box">
        <span>이메일: </span>
        <input
          data-testid="email-input"
          type="text"
          onChange={handleEmailChange}
          onKeyUp={handleSigninEnter}
          value={email}
        />
      </div>
      <div className="input-box">
        <span>비밀번호: </span>
        <input
          data-testid="password-input"
          type="password"
          onChange={handlePasswordChange}
          onKeyUp={handleSigninEnter}
          value={password}
        />
      </div>
      <button
        data-testid="signin-button"
        onClick={handleSigninClick}
        disabled={!checkAllValid}
      >
        로그인
      </button>
    </div>
  );
};

export default Signin;

import { useEffect } from "react";
import useUser from "../../hooks/user/useUser";

const Signup = () => {
  const {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    checkAllValid,
    handleClickSignup,
    redirectAlreadyLoginUser,
  } = useUser();

  useEffect(() => {
    redirectAlreadyLoginUser();
  }, []);

  return (
    <div>
      Sign Up Page
      <input
        data-testid="email-input"
        type="text"
        onChange={handleChangeEmail}
        value={email}
      />
      <input
        data-testid="password-input"
        type="password"
        onChange={handleChangePassword}
        value={password}
      />
      <button
        data-testid="signup-button"
        onClick={handleClickSignup}
        disabled={!checkAllValid}
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;

import { useEffect } from "react";
import useUser from "../../hooks/user/useUser";

const Signin = () => {
  const {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    checkAllValid,
    handleClickSignin,
    redirectAlreadyLoginUser,
  } = useUser();

  useEffect(() => {
    redirectAlreadyLoginUser();
  }, []);

  return (
    <div>
      Sign In Page
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
        data-testid="signin-button"
        onClick={handleClickSignin}
        disabled={!checkAllValid}
      >
        로그인
      </button>
    </div>
  );
};

export default Signin;

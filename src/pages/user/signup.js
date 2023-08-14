import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const handleChangeEmail = (e) => {
    const nextText = e.target.value;
    const re = /@/g;
    setValidEmail(re.test(nextText));
    setEmail(nextText);
  };

  const handleChangePassword = (e) => {
    const nextText = e.target.value;
    setValidPassword(nextText.length >= 8);
    setPassword(nextText);
  };

  const handleClickSignup = () => {
    if (validEmail && validPassword) {
      // TODO:
    }
  };

  return (
    <div>
      Sign Up Page
      <input
        data-testid="email-input"
        onChange={handleChangeEmail}
        value={email}
      />
      <input
        data-testid="password-input"
        onChange={handleChangePassword}
        value={password}
      />
      <button
        data-testid="signup-button"
        onClick={handleClickSignup}
        disabled={!(validEmail && validPassword)}
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;

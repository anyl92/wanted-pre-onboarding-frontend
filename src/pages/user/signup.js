import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../utils/api/api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const navigate = useNavigate();

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
      postSignup({ email: email, password: password }).then((res) => {
        if (res.status === 201) {
          navigate("/signin");
        } else {
          alert("에러 발생, 고객센터로 문의 부탁드립니다.");
        }
      });
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

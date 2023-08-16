import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup, postSignin } from "../../utils/api/user";

const useUser = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const nextText = e.target.value;
    const re = /@/g;
    setValidEmail(re.test(nextText));
    setEmail(nextText);
  };

  const handlePasswordChange = (e) => {
    const nextText = e.target.value;
    setValidPassword(nextText.length >= 8);
    setPassword(nextText);
  };

  const checkAllValid = validEmail && validPassword;

  const userData = {
    email: email,
    password: password,
  };

  const signup = () => {
    postSignup(userData).then((res) => {
      if (res.status === 201) {
        navigate("/signin");
      } else {
        alert("회원가입 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const signin = () => {
    postSignin(userData).then((res) => {
      if (res.code === "ERR_BAD_REQUEST") {
        alert("이메일 또는 비밀번호를 확인해주세요.");
        return;
      }
      if (res.status === 200) {
        localStorage.setItem("user_token", res.data.access_token);
        navigate("/todo");
      } else {
        alert("로그인 에러 발생, 고객센터로 문의 부탁드립니다.");
      }
    });
  };

  const handleSignupClick = () => {
    if (checkAllValid) {
      signup();
    }
  };

  const handleSigninClick = () => {
    if (checkAllValid) {
      signin();
    }
  };

  const redirectAlreadyLoginUser = () => {
    if (localStorage.getItem("user_token")) {
      navigate("/todo");
    }
  };
  const redirectNotLoginUser = () => {
    if (!localStorage.getItem("user_token")) {
      navigate("/signin");
      return true;
    }
  };

  const handleSignupEnter = (e) => {
    const keyInput = e.key;
    if (checkAllValid && keyInput === "Enter") {
      signup();
    }
  };

  const handleSigninEnter = (e) => {
    const keyInput = e.key;
    if (checkAllValid && keyInput === "Enter") {
      signin();
    }
  };

  return {
    email,
    validEmail,
    password,
    handleEmailChange,
    handlePasswordChange,
    checkAllValid,
    handleSignupClick,
    handleSigninClick,
    redirectAlreadyLoginUser,
    redirectNotLoginUser,
    handleSignupEnter,
    handleSigninEnter,
  };
};

export default useUser;

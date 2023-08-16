import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup, postSignin } from "../../utils/api/user";

const useUser = () => {
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

  const checkAllValid = validEmail && validPassword;

  const userData = {
    email: email,
    password: password,
  };

  const handleClickSignup = () => {
    if (checkAllValid) {
      postSignup(userData).then((res) => {
        if (res.status === 201) {
          navigate("/signin");
        } else {
          alert("에러 발생, 고객센터로 문의 부탁드립니다.");
        }
      });
    }
  };

  const handleClickSignin = () => {
    if (checkAllValid) {
      postSignin(userData).then((res) => {
        if (res.code === "ERR_BAD_REQUEST") {
          alert("이메일 또는 비밀번호를 확인해주세요.");
          return;
        }
        if (res.status === 200) {
          localStorage.setItem("user_token", res.data.access_token);
          navigate("/todo");
        } else {
          alert("에러 발생, 고객센터로 문의 부탁드립니다.");
        }
      });
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

  return {
    email,
    validEmail,
    password,
    handleChangeEmail,
    handleChangePassword,
    checkAllValid,
    handleClickSignup,
    handleClickSignin,
    redirectAlreadyLoginUser,
    redirectNotLoginUser,
  };
};

export default useUser;

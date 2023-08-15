import instance from "../axios";

export const postSignup = async (body) => {
  try {
    return await instance.post(`/auth/signup`, body);
  } catch (err) {
    throw err;
  }
};

export const postSignin = async (body) => {
  try {
    return await instance.post(`/auth/signin`, body);
  } catch (err) {
    throw err;
  }
};

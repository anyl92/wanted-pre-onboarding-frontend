import instance from "../axios";

export const postSignup = async (body) => {
  try {
    return await instance.post(`/auth/signup`, body);
  } catch (err) {
    throw err;
  }
};

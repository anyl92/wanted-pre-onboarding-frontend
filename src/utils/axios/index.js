import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("user_token");
    token &&
      (config.headers = {
        Authorization: `Bearer ${token}`,
      });
    return config;
  },
  function (error) {
    return error;
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error;
  }
);

export default instance;

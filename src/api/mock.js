import axios from "axios";

const mockRequests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

// 添加请求拦截器
mockRequests.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
mockRequests.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default mockRequests;

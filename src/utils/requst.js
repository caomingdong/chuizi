import axios from "axios";

const request = axios.create({
  baseURL: "http://localhot:8080/cate"
});

request.interceptors.response.use(response => {
  return response;
});

export default request;

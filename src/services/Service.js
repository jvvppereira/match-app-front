
import axios from "axios";

const service = axios.create({
  baseURL: "https://match-app-back.herokuapp.com/"
});

export default service;
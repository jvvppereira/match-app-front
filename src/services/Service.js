import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL_DB || "http://localhost:3001/";

const service = axios.create({ baseURL });

export default service;

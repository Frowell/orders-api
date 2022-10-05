import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7020/api",
  headers: {
    "Content-type": "application/json",
    "Accept" : "*/*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});
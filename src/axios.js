import axios from "axios";

const instance = axios.create({
    baseURL: "http://102.164.38.38/cetest/api/v1"
});

export default instance;
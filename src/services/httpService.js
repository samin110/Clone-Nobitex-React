import axios from "axios";

axios.defaults.baseURL = "https://api.nobitex.ir/";

export const http = {
  get: axios.get,
  post: axios.post,
};

import axios from "axios";

export const httpApi = axios.create({
  baseURL: "https://605d074f9386d200171ba209.mockapi.io/api/v1/",
});

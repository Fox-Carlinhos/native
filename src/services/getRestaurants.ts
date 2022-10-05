import { httpApi } from "../infra/http/httpApi";

export const getRestaurants = async () => {
  try {
    const { data } = await httpApi.get("restaurants?page=1&limit=10");
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

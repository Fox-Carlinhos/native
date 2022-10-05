import { httpApi } from "../infra/http/httpApi";

export const getRestaurantInfo = async (id: string) => {
  try {
    const { data } = await httpApi.get(`restaurants/${id}`);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

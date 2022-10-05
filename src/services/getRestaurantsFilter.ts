import { httpApi } from "../infra/http/httpApi";

export const getRestaurantsFilter = async (searchString: string) => {
  try {
    const { data } = await httpApi.get(`restaurants?page=1&limit=10&search=${searchString}`);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

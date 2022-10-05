export type RestaurantObjectDTO = {
  id: string;
  name: string;
  description: string;
  image: string;
  logo: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
};

export type RestaurantListDTO = {
  index: number;
  item: RestaurantObjectDTO;
};

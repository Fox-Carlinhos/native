import { TouchableOpacityProps } from "react-native";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
}

export interface Props extends TouchableOpacityProps {
  data: {
    index: number;
    item: RestaurantCardProps;
  };
}

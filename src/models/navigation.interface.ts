import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStack = {
  Restaurant: undefined;
  RestaurantInfo: {
    id: string;
  };
};

export type propsStack = StackNavigationProp<propsNavigationStack>;

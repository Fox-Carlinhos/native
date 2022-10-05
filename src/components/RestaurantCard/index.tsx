import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../models/navigation.interface";
import { Props } from "../../models/restaurantCard.interface";

export function RestaurantCard({ data, ...rest }: Props) {
  const navigation = useNavigation<propsStack>();

  return (
    <TouchableOpacity
      style={[
        { ...styles.container },
        data.index % 2 == 0 ? { marginRight: 10 } : { marginLeft: 10 },
      ]}
      {...rest}
      onPress={() => navigation.navigate("RestaurantInfo", { id: data.item.id })}
    >
      <ImageBackground style={styles.cover} source={{ uri: data.item.image }}>
        <Text style={styles.name}>{data.item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

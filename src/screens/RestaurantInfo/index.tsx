import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";

import arrow from "../../assets/leftArrow.png";

import { styles } from "./styles";
import { propsNavigationStack, propsStack } from "../../models/navigation.interface";
import { getRestaurantInfo } from "../../services/getRestaurantInfo";
import { RestaurantObjectDTO } from "../../models/restaurant.interface";

interface IRestaurantInfo {
  route: RouteProp<propsNavigationStack, "RestaurantInfo">;
}

export function RestaurantInfo({ route }: IRestaurantInfo) {
  const navigation = useNavigation<propsStack>();
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantObjectDTO>();

  async function initData(id: string) {
    const { data } = await getRestaurantInfo(id);
    setRestaurantInfo(data);
  }

  useEffect(() => {
    initData(route.params.id);
  }, []);

  return (
    <>
      {restaurantInfo && (
        <View style={styles.container}>
          <ImageBackground source={{ uri: restaurantInfo.image }} style={styles.background}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Restaurant")}
            >
              <Image source={arrow} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <View style={styles.logoWrapper}>
              <View style={styles.logoSecondBorder}>
                <Image style={styles.logo} source={{ uri: restaurantInfo.logo }} />
              </View>
            </View>
            <Text style={styles.name}>{restaurantInfo.name}</Text>
            <View style={styles.wrapper}>
              <Text style={styles.title}>Descrição</Text>
              <Text>{restaurantInfo.description}</Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.title}>Contato</Text>
              <Text>
                {restaurantInfo.telephone} {"\n"}
                {restaurantInfo.website}{" "}
              </Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.title}>Faixa de preço</Text>
              <Text>{restaurantInfo.price_range}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.wrapper}>
              <Text style={styles.title}>Horários de Funcionamento</Text>
              <Text>{restaurantInfo.opening_hours}</Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.title}>Formas de pagamento</Text>
              <Text>{restaurantInfo.payment_methods}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

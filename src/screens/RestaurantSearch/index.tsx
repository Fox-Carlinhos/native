import { ChangeEvent, useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, View } from "react-native";

import background from "../../assets/discoverBackground.png";
import searchIcon from "../../assets/search.png";
import { RestaurantCard } from "../../components/RestaurantCard";
import { RestaurantListDTO, RestaurantObjectDTO } from "../../models/restaurant.interface";
import { getRestaurants } from "../../services/getRestaurants";
import { getRestaurantsFilter } from "../../services/getRestaurantsFilter";

import { styles } from "./styles";

export function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState<RestaurantObjectDTO[]>();
  const [search, setSearch] = useState("");

  async function initData() {
    const { data } = await getRestaurants();
    setRestaurants(data);
  }

  async function handleChange(text: string) {
    setSearch(text);
    const { data } = await getRestaurantsFilter(text.toLowerCase());
    setRestaurants(data);
  }

  useEffect(() => {
    (async () => {
      if (search.length > 5) {
        const { data } = await getRestaurantsFilter(search.toLowerCase());
        setRestaurants(data);
      }
    })();
  }, [search]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Descubra novos sabores</Text>
        <Text style={styles.subtitle}>Aqui eu converso com você sobre nossa proposta</Text>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.searchInput}>
          <Image source={searchIcon} />
          <TextInput
            style={styles.input}
            placeholder='Encontre um restaurante'
            placeholderTextColor='#6b6b6b'
            keyboardType='default'
            onChangeText={(e) => handleChange(e)}
          />
        </View>
        <Text style={styles.contentTitle}>Restaurantes</Text>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={restaurants}
          extraData={restaurants}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={styles.contentList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(data: RestaurantListDTO) => <RestaurantCard data={data} />}
        />
      </View>
      <View style={styles.reguede}>
        <Text>Sexo</Text>
      </View>
    </View>
  );
}

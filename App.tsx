import { SafeAreaView, StatusBar } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { RestaurantInfo } from "./src/screens/RestaurantInfo";
import { Loading } from "./src/components/Loading";
import { RestaurantSearch } from "./src/screens/RestaurantSearch";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { propsNavigationStack } from "./src/models/navigation.interface";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  const Stack = createNativeStackNavigator<propsNavigationStack>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fontsLoaded ? (
        <>
          <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Restaurant' component={RestaurantSearch} />
              <Stack.Screen name='RestaurantInfo' component={RestaurantInfo} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}

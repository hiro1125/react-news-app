import 'expo-dev-menu';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleScreen } from "./screens/ArticleScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { RootStackParamList } from "./types/type";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

import 'expo-dev-menu';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleScreen } from "./screens/ArticleScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { RootStackParamList } from "./types/type";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { ClipScreen } from './screens/ClipScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{headerShown: false}} />
        <Tab.Screen name="ClipTab" component={ClipScreen} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

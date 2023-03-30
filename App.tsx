import "expo-dev-menu";
import {NavigationContainer, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ArticleScreen} from "./screens/ArticleScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {RootStackParamList} from "./types/type";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {ClipScreen} from "./screens/ClipScreen";
import {FontAwesome} from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  color: string;
  size: number;
};

const screenOption = ({route}: BottomTabScreenProps<RootStackParamList>) => ({
  tabBarIcon: ({color, size}: Props) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{headerShown: false, title: "Home"}}
        />
        <Tab.Screen
          name="ClipTab"
          component={ClipScreen}
          options={{headerShown: false, title: "Clip"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

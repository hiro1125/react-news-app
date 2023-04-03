import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {ListItem} from "../components/ListItem";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList, UserStateProps} from "../types/type";
import {useRootSelector} from "../store";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Clip">;
};

export const ClipScreen = ({navigation}: Props) => {
  const clips = useRootSelector((state) => state.users.clips);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({item}: {item: UserStateProps}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

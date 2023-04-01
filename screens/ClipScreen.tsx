import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {ListItem} from "../components/ListItem";
import {RootStackParamList} from "../types/type";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Clip">;
};

export const ClipScreen = ({navigation}: Props) => {
  const clips = useSelector((state: any) => state.user.clips);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({item}) => (
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
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});

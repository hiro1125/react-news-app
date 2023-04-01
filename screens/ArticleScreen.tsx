import {RouteProp} from "@react-navigation/native";
import {SafeAreaView, StyleSheet} from "react-native";
import {RootStackParamList} from "../types/type";
import {WebView} from "react-native-webview";
import {ClipButton} from "../components/ClipButton";
import {useDispatch} from "react-redux";
import {addClip} from "../store/userSlice";

type Props = {
  route: RouteProp<RootStackParamList, "Article">;
};

export const ArticleScreen = ({route}: Props) => {
  const {article} = route.params;
  const dispatch = useDispatch();

  const onPressClip = () => {
    dispatch(addClip(article));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={false} />
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "FFF",
  },
});

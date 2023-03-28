import { RouteProp } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native"
import { RootStackParamList } from "../types/type";
import {WebView} from "react-native-webview";


type Props = {
  route: RouteProp<RootStackParamList,"Article">
}

export const ArticleScreen = ({route}: Props) => {
  const {article} = route.params;
  return(
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "FFF"
  },
});

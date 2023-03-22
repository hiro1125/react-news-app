import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';


export default function App() {

  return (
    <View style={styles.container}>
      <ListItem
      imageUrl={"https://picsum.photos/id/10/300/300"}
      title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      author='React News' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';


export default function App() {

  return (
    <View style={styles.container}>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
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

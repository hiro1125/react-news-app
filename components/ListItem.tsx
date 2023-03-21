import { Image, StyleSheet, Text, View } from 'react-native';

export const ListItem = () => {

  const sampleText = "text text text text text text text text text text text text text text text text"

  return (
      <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{width: 100, height: 100}} source={{uri: "https://picsum.photos/id/10/300/300"}} />
      </View>
      <View style={styles.rightContainer} >
        <Text numberOfLines={3} style={styles.text}>{sampleText}</Text>
        <Text style={styles.subText}>ReactNews</Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection:"row",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

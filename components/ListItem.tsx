import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  imageUrl: string;
  title: string;
  author: string;
};

export const ListItem = ({ imageUrl, title, author }: Props) => {

  return (
      <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
        style={{width: 100, height: 100}}
        source={{uri:imageUrl}} />
      </View>
      <View style={styles.rightContainer} >
        <Text numberOfLines={3} style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{author}</Text>
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

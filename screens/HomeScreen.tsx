import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ListItem } from "../components/ListItem";
import axios from "axios";
import { Article } from "../types/type";
import { apiKey } from "../env";

const URL = `https://newsapi.org/v2/everything?q=apple&from=2023-03-24&to=2023-03-24&sortBy=popularity&apiKey=${apiKey}` ;

export const HomeScreen =() => {
  const [articles,setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(()=> {
    fetchArticles()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={articles} renderItem={({item}: {item: Article}) => (
          <ListItem
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
        />
        )}
      keyExtractor={(item, key)=>key.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

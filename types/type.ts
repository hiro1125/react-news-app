export type Article = {
  title: string;
  author: string;
  url: string;
  urlToImage: string;
};

export type RootStackParamList = {
  homeScreen: undefined;
  Article: undefined;
};
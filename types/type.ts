export type Article = {
  title: string;
  author: string;
  url: string;
  urlToImage: string;
};

export type RootStackParamList = {
  Home: undefined;
  Article: {article: Article};
};
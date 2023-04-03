/** ニュースデータのProps  */
export type UserStateProps = {
  url?: string;
  urlToImage?: string;
  imageUrl?: string;
  title: string;
  author: string;
  onPress: () => void;
};

/** アプリケーションのルーティング */
export type RootStackParamList = {
  Home: undefined;
  Article: {article: UserStateProps};
  HomeTab: undefined;
  ClipTab: undefined;
  Clip: undefined;
};

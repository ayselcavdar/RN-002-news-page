import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const NewsCard = ({ news }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: news.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}> {news.description}</Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    lineHeight: 20,
  },
  image: {
    resizeMode: 'center',
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 5,
    marginVertical: 10,
  },
});
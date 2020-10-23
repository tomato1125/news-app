import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row"
  },
  leftContainer:{
    // backgroundColor: "red",
    width: 100
  },
  rightContainer:{
    padding: 10,
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: "gray"
  }
});

export default function App() {
  const items = articles.map( (article, index)=> {return (
    <ListItem 
      imageUrl={article.urlToImage}
      title={article.title}
      author={article.author} 
      key={index}
    />
  )} )

  return (
    <View style={styles.container}>
      {items}
    </View>
  );
}

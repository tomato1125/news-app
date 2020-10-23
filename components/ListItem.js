import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
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

const listItem = () => {
  return(
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer} >
        <Image
          style={{width: 100, height: 100}}
          source={{url: 'https://picsum.photos/200/300'}}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          ad minim veniam, quis nostrud exercitation
        </Text>
        <Text style={styles.subText}>ReactNews2</Text>
      </View>
    </View>
  )
}

export default listItem;
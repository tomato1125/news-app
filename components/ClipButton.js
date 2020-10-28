import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

//12行目にenabledというpropsを受け取っている。13行目でenabledのtrue,falseによってbookmark' : 'bookmark-o'を切り替える。
const ClipButton = ({onPress, enabled}) => {
  const name = enabled ?'bookmark' : 'bookmark-o';
  return (
    //TouchableOpacityで親コンポーネントにボタンを押したことを返している。
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};

export default ClipButton;
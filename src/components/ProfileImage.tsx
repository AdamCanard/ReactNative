import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ProfileImage(): React.JSX.Element {
  return (
    <View style={style.profileImageStyle}>
      <Image source={require('../../assets/ProfileImage.png')} style={style.profilePhotoStyle} />
    </View>
  );
}
const style = StyleSheet.create({
  profileImageStyle: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 7,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  profilePhotoStyle: { resizeMode: 'cover', height: '170%', width: '170%', bottom: 70, right: 75 },
});

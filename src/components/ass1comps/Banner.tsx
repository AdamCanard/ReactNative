import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
export default function Banner(): React.JSX.Element {
  return (
    <View style={style.bannerStyle}>
      <Image source={require('../../../assets/BannerImage.jpg')} style={style.bannerImageStyle} />
    </View>
  );
}
const style = StyleSheet.create({
  bannerStyle: {
    height: 180,
    borderWidth: 4,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
  },
  bannerImageStyle: { resizeMode: 'cover', height: '100%', width: '100%' },
});

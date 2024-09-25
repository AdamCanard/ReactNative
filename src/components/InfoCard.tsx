import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function InfoCard(): React.JSX.Element {
  return (
    <View style={style.infoCardStyle}>
      <View style={style.infoTextStyle}>
        <Text style={style.nameStyle}>Adam Cunard</Text>
        <Text style={style.subtitleStyle}>Local Beerfluencer</Text>
        <Text style={style.introStyle}>Calgary Developer {'\n'} Java Enthusiast </Text>
        <View style={style.socialBarStyle}>
          <Image style={style.socialImageStyle} source={require('../../assets/fb.png')} />
          <Image style={style.socialImageStyle} source={require('../../assets/insta.png')} />
          <Image style={style.socialImageStyle} source={require('../../assets/linkedin.png')} />
          <Image style={style.socialImageStyle} source={require('../../assets/twitter.png')} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  infoCardStyle: {
    flexGrow: 1,
    borderWidth: 4,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
    alignItems: 'center',
    paddingTop: 55,
  },
  infoTextStyle: { flexGrow: 1, justifyContent: 'space-around' },
  nameStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#000080',
    fontFamily: 'ms-sans-serif',
  },
  subtitleStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '400',
    color: '#1084d0',
    fontFamily: 'ms-sans-serif',
  },
  introStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#0842A8',
    fontFamily: 'ms-sans-serif',
  },
  socialBarStyle: { flexDirection: 'row', justifyContent: 'space-evenly' },
  socialImageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

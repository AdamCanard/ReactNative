import React from 'react';
import { StyleSheet, View } from 'react-native';
import Banner from './Banner';
import InfoCard from './InfoCard';
import ProfileImage from './ProfileImage';

export default function ProfileCard(): React.JSX.Element {
  return (
    <>
      <View style={style.cardStyle}>
        <Banner />
        <InfoCard />
        <ProfileImage />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  cardStyle: {
    position: 'relative',
    flexDirection: 'column',
    width: '80%',
    height: 500,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
    borderWidth: 4,
    backgroundColor: '#bababa',
    fontSize: 20,
    elevation: 20,
    padding: 4,
  },
});

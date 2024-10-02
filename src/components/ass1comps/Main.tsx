import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ProfileCard from './ProfileCard';

export function Main(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={style.mainStyle}>
        <ProfileCard />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#bababa',
  },
});

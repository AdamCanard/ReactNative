import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppHeader = (): React.JSX.Element => {
  return (
    <View style={style.addHeader}>
      <Text style={style.appHeaderTxt}>DEMO</Text>
    </View>
  );
};

const style = StyleSheet.create({
  appHeaderTxt: {
    height: 55,
    width: '100%',
    backgroundColor: '#000080',
    padding: 3,
    letterSpacing: 0,
    fontSize: 35,
    fontWeight: '600',
    color: '#fafafa',
  },
  addHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

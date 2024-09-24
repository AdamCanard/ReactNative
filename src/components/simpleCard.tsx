import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SimpleCard = () => {
  return (
    <View style={style.cardStyle}>
      <Text style={style.cardTitle}>Card</Text>
      <Text numberOfLines={8} style={style.cardText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dolorem voluptates
        doloremque necessitatibus officiis, officia quaerat rerum deleniti cum quo architecto dicta,
        commodi minima itaque explicabo libero ratione? Possimus, incidunt?libero ratione? Possimus,
        incidunt?libero ratione? Possimus, incidunt?libero ratione? Possimus, incidunt? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptate quis nisi ab dolores corrupti
        suscipit aut neque hic eaque voluptatem unde, iste rerum repellendus accusantium et
        obcaecati quibusdam ea. Modi?
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  cardStyle: {
    width: 200,
    height: 200,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
    borderWidth: 4,
    backgroundColor: '#bababa',
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 24,
  },
  cardTitle: {
    height: 30,
    width: '100%',
    backgroundColor: '#000080',
    paddingLeft: 4,
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 20,
    fontWeight: '600',
    color: '#fafafa',
  },
  cardText: {
    height: 160,
    width: '100%',
    backgroundColor: '#bababa',
    paddingLeft: 4,
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#0a0a0a',
  },
});

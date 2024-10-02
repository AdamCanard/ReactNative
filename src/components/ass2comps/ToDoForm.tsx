import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ToDoForm() {
  return (
    <>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
    borderWidth: 4,
    backgroundColor: '#bababa',
    fontSize: 20,
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

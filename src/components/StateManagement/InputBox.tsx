import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function InputBox(props: {
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.setNumber}
        value={props.number}
        placeholder="Password Length (8-16)"
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: '100%',
    height: 60,
    alignSelf: 'center',
    paddingStart: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

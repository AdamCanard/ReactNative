import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ToDoForm(props: {
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
}) {
  const [currentTask, setCurrentTask] = useState<string>('');

  const handlePress = () => {
    props.setTasks([...props.tasks, currentTask]);
    setCurrentTask('');
  };
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={currentTask}
          onChangeText={setCurrentTask}
        />
        <Button title="Add" onPress={handlePress} />
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

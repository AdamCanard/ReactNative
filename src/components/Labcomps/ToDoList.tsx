import React, { useState } from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ToDoList(props: { tasks: string[] }) {
  return (
    <>
      <ScrollView style={styles.scrollStyle}>
        {props.tasks.map((task, index) => {
          return <Task task={task} key={index} />;
        })}
      </ScrollView>
    </>
  );
}

function Task(props: { task: string }) {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <Pressable onPress={() => setPressed(!pressed)}>
        <View style={pressed ? [styles.task, styles.completed] : styles.task}>
          <Text style={styles.taskText}>{props.task}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    display: 'flex',
    backgroundColor: '#bababa',
  },
  task: {
    borderLeftColor: '#c8c8c8',
    borderTopColor: '#969696',
    borderRightColor: '#969696',
    borderBottomColor: '#c8c8c8',
    borderWidth: 2,
    backgroundColor: '#dababa',
    padding: 4,
  },
  completed: {
    backgroundColor: '#badaba',
  },
  taskText: {
    fontSize: 16,
  },
});

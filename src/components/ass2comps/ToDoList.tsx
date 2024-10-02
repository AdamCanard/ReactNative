import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ToDoList() {
  return (
    <>
      <ScrollView style={styles.scrollStyle}>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
      </ScrollView>
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

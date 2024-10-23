/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './src/components/Labcomps/ToDoList';
import ToDoForm from './src/components/Labcomps/ToDoForm';

function App() {
  const [tasks, setTasks] = useState<string[]>(['Do Laundry', 'Go to gym', 'Walk dog']);
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;

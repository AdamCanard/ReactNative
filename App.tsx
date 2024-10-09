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
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm tasks={tasks} setTasks={setTasks} />
    </SafeAreaView>
  );
}

export default App;

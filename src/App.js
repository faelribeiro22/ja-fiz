import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { useLocalStorageState } from 'react-storage-hooks';

const App = () => {
  const [tasks, setTasks] = useLocalStorageState('ja-fiz', []);
  return (
    <div>
      <Header />
      <Banner
        onNewTask={t => {
          console.log('Tá removendo');
          setTasks([...tasks, t]);
        }}
      />
      <Main
        tasks={tasks}
        onNewTaskDone={(taskId, log) => {
          setTasks([
            ...tasks.map(t => {
              if (t.id !== taskId) {
                return t;
              }
              return { ...t, logs: [...t.logs, log] };
            }),
          ]);
        }}
        onRemoveTask={taskId => {
          if (!window.confirm('Tem certeza?')) {
            return;
          }
          setTasks([...tasks.filter(t => t.id !== taskId)]);
        }}
      />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';

const App = () => {
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('ja-fiz'));
    if (localData) {
      setTasks(localData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('ja-fiz', JSON.stringify(tasks));
  });
  const [tasks, setTasks] = useState([]);
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

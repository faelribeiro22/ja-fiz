import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { ThemeProvider } from 'styled-components';

const THEMES = {
  dark: {
    background: '#3e3e3e',
    text: '#fff',
    categoryColor: '#fff',
  },
  light: {
    background: '#fff',
    text: '#333',
    categoryColor: '#929db6',
  },
};

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
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeProvider theme={THEMES[darkTheme ? 'dark' : 'light']}>
      <div>
        <Header onToggleDarkTheme={() => setDarkTheme(!darkTheme)} />
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
    </ThemeProvider>
  );
};

export default App;

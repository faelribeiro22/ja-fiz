import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const Application = styled.div`
  width: 360px;
  margin: 0 auto;
  font-family: 'Roboto Mono', sans-serif;
`;

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
  const [tasks, setTasks] = useLocalStorage('ja-fiz', '');
  const [darkTheme, setDarkTheme] = useLocalStorage('ja-fiz:theme', true);
  return (
    <ThemeProvider theme={THEMES[darkTheme ? 'dark' : 'light']}>
      <Application>
        <Header onToggleDarkTheme={() => setDarkTheme(!darkTheme)} />
        <Banner
          onNewTask={t => {
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
      </Application>
    </ThemeProvider>
  );
};

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      debugger;
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default App;

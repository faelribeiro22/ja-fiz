import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import useLocalStorage from './utils/stateLocalStorage';

const Application = styled.div`
  min-width: 320px;
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
        <Header
          onToggleDarkTheme={() => setDarkTheme(!darkTheme)}
          darkTheme={darkTheme}
        />
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

export default App;

import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Header />
      <Banner
        onNewTask={t => {
          setTasks([...tasks, t]);
        }}
      />
      <Main tasks={tasks} />
    </div>
  );
};

export default App;

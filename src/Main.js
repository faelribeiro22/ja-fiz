import React from 'react';
import groupBy from 'lodash.groupby';

const Main = ({ tasks }) => {
  const byCategory = groupBy(tasks, t => t.category);
  return (
    <div>
      {Object.keys(byCategory).map(c => (
        <div key={c}>
          <h4>{c}</h4>
          {byCategory[c].map(t => (
            <div key={t.id}>{t.text}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Main;

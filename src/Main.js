import React, { useState } from 'react';
import groupBy from 'lodash.groupby';
import nanoid from 'nanoid';
import { format } from 'date-fns';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.text};
  padding: 1em;
`;

const EmptyContainer = styled.p`
  text-allign: center;
  padding: 16px;
  font-size: 2rem;
`;

const Category = styled.div``;
const CategoryName = styled.h3`
  font-size: 0.8rem;
  color: ${p => p.theme.categoryColor};
`;

const Main = ({ tasks, onNewTaskDone, onRemoveTask }) => {
  const byCategory = groupBy(tasks, t => t.category);
  const [obs, setObs] = useState('');
  return (
    <Container>
      {tasks.length === 0 && <EmptyContainer>Não tem nada Aqui</EmptyContainer>}
      {Object.keys(byCategory).map(c => (
        <Category key={c}>
          <CategoryName>{c}</CategoryName>
          {byCategory[c].map(t => (
            <div key={t.id}>
              <div>
                {t.text}
                <button onClick={() => onRemoveTask(t.id)}>delete</button>
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onNewTaskDone(t.id, { id: nanoid(), obs, date: Date.now() });
                  setObs('');
                }}
              >
                <input
                  type="text"
                  value={obs}
                  onChange={e => setObs(e.target.value)}
                />
                <button type="submit">+</button>
              </form>
              <table>
                <tbody>
                  {t.logs.map(l => (
                    <tr key={l.id}>
                      <td>{format(l.date, 'DD/MM/YY hh:mm')}</td>
                      <td>{l.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </Category>
      ))}
    </Container>
  );
};

export default Main;

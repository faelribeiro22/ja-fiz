import React, { useState } from 'react';
import nanoid from 'nanoid';

const Banner = ({ onNewTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('outros');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onNewTask({ id: nanoid(), text, category, logs: [] });
          setText('');
        }}
      >
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="outros">Outros</option>
          <option value="casa">casa</option>
          <option value="trabalho">Trabalho</option>
          <option value="esporte">Esporte</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Banner;

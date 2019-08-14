import React, { useState } from 'react';
import nanoid from 'nanoid';
import Select from './shared/Select';

const Banner = ({ onNewTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('outros');
  const options = [
    {
      value: 'outros',
      label: 'Outros',
    },
    {
      value: 'casa',
      label: 'Casa',
    },
    {
      value: 'trabalho',
      label: 'Trabalho',
    },
    {
      value: 'esporte',
      label: 'Esporte',
    },
  ];

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onNewTask({ id: nanoid(), text, category, logs: [] });
          setText('');
        }}
      >
        <Select
          options={options}
          onSelectOption={setCategory}
          inputLabel={'Categorias'}
        />
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

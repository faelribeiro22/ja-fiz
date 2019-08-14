import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import SelectMaterial from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Select = ({ options, onSelectOption, inputLabel }) => {
  const [selected, setSelected] = useState({
    label: '',
    value: '',
  });
  return (
    <>
      <InputLabel htmlFor="selectComponent">{inputLabel}</InputLabel>
      <SelectMaterial
        value={selected.value}
        onChange={onSelectOption}
        inputProps={{ id: 'selectComponent' }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMaterial>
    </>
  );
};

export default Select;

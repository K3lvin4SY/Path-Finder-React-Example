import React from "react";
import { Slider } from '@mui/material';
import { useState } from 'react';

export function SizeSlider({ title, onChange, size}) {
  const [value, setValue] = useState(size);
  function handleChange(event, newValue) {
    setValue(newValue);
    onChange(value);
  }

  return (
    <>
      <h1>{title}</h1>
      <Slider onChange={handleChange} className='tileAmount'
        aria-label="Always visible"
        defaultValue={10}
        step={1}
        valueLabelDisplay="on"
        min={3}
        max={20}
        value={value}
      />
    </>
  );
};
import React from "react";
import { ButtonGroup, Button } from '@mui/material';
import { useState, useRef } from 'react';

export function BuildModeSelector({ title, onMix, onSolve, onClear }) {

  const childCompRef = useRef();

  return (
    <>
      <h1>{title}</h1>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={() => onMix()}>Mix</Button>
        <Button onClick={() => onSolve()}>Solve</Button>
        <Button onClick={() => onClear()}>Clear</Button>
      </ButtonGroup>
    </>
  );
};
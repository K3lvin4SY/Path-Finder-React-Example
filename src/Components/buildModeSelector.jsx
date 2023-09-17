import React from "react";
import { ButtonGroup, Button } from '@mui/material';
import { useState, useRef } from 'react';

export function BuildModeSelector({ title, onChange, onClear }) {

  const childCompRef = useRef();

  return (
    <>
      <h1>{title}</h1>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={() => onChange("selectedTile")}>Place Walls</Button>
        <Button onClick={() => onChange("pathTile")}>Place Path Points</Button>
        <Button onClick={() => onClear()}>Place Path Points</Button>
      </ButtonGroup>
    </>
  );
};
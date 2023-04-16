import React from "react";
import { ButtonGroup, Button } from '@mui/material';
import { useState, useRef } from 'react';

export function BuildModeSelector({ title, onChange }) {
  const [value, setCurrentTileTool] = useState("selectedTile");
  function handleChange(newValue) {
    //setCurrentTileTool(newValue);
    onChange(newValue);
  }

  const childCompRef = useRef();

  return (
    <>
      <h1>{title}</h1>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={() => childCompRef.current.chnageTileType("selectedTile")}>Place Walls</Button>
        <Button onClick={() => childCompRef.current.chnageTileType("pathTile")}>Place Path Points</Button>
      </ButtonGroup>
    </>
  );
};
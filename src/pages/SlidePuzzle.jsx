import React from "react";
import { useState, useRef } from 'react';
//import logo from './logo.svg';
import '../Styles/SlidePuzzle.css';
import { Box } from '@mui/material';
import { Board } from '../Components/board';
import { SizeSlider } from '../Components/slider';
import { BuildModeSelector } from '../Components/buildModeSelector';

function SlidePuzzle() {
  const [gridSizeX, setGridSizeX] = useState(4);
  const [gridSizeY, setGridSizeY] = useState(4);
  function updateGridSizeX(size) {
    console.log(size);
    setGridSizeX(size);
  }
  function updateGridSizeY(size) {
    console.log(size);
    setGridSizeY(size);
  }
  const childCompRef = useRef();
  function updateTileToolColor(value) {
    childCompRef.current.chnageTileType(value);
  }
  function updateTileToolClear() {
    childCompRef.current.clearGrid();
  }

  return (
    <Box className='baseContainer' sx={{ flexGrow: 1 }}>
      <Box className='container'>
        <Board sizeX={gridSizeX} sizeY={gridSizeY} ref={childCompRef}/>
        <Box className='tileMapSettings'>
          <SizeSlider title={"Width"} onChange={updateGridSizeX} size={gridSizeX}/>
          <SizeSlider title={"Height"} onChange={updateGridSizeY} size={gridSizeY}/>
          <BuildModeSelector title={"Tile Tools"} onChange={updateTileToolColor} onClear={updateTileToolClear}/>
        </Box>
      </Box>
    </Box>
  );
}     

export default SlidePuzzle;

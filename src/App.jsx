import React from "react";
import { useState, useRef } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Board } from './Components/board';
import { SizeSlider } from './Components/slider';

function App() {
  const [gridSizeX, setGridSizeX] = useState(10);
  const [gridSizeY, setGridSizeY] = useState(10);
  function updateGridSizeX(size) {
    console.log(size);
    setGridSizeX(size);
  }
  function updateGridSizeY(size) {
    console.log(size);
    setGridSizeY(size);
  }
  const childCompRef = useRef()

  return (
    <Box className='baseContainer' sx={{ flexGrow: 1 }}>
      <Box className='container'>
        <Board sizeX={gridSizeX} sizeY={gridSizeY} ref={childCompRef}/>
        <Box className='tileMapSettings'>
          <SizeSlider title={"Width"} onChange={updateGridSizeX}/>
          <SizeSlider title={"Height"} onChange={updateGridSizeY}/>
          <button onClick={() => childCompRef.current.clearGrid()}>Clear Me</button>
          <button onClick={() => childCompRef.current.chnageTileType("pathTile")}>pathTile</button>
          <button onClick={() => childCompRef.current.chnageTileType("selectedTile")}>selectedTile</button>
        </Box>
      </Box>
    </Box>
  );
}     

export default App;

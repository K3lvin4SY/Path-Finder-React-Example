import React from 'react';
import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Slider } from '@mui/material';
import Grid from "@mui/material/Grid";
import { getValue } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Tile({ classes, value, onSquareClick }) {
  const classNames = "tile "+classes
  return (
    <Item className={classNames} onClick={onSquareClick}>
      {value}
    </Item>
  );
}

function TileMap({ tilesClasses, tiles, size, onEdit }) {
  function handleClick(i) {
    const nextTiles = tiles.slice();
    const nextTilesClasses = tilesClasses.slice();
    if (nextTilesClasses[i] !== "selectedTile") {
      nextTiles[i] = '';
      nextTilesClasses[i] = "selectedTile";
    } else {
      nextTiles[i] = '';
      nextTilesClasses[i] = "";
    }
    onEdit(nextTiles, nextTilesClasses[i], i);
  }

  return (
    <Grid id="tileMap" className='tileMap' container spacing={{ xs: 2, md: 2 }} columns={{ md: size*2 }}>
      {Array.from(Array(size*size)).map((_, index) => (
        <Grid item xs={5} sm={5} md={2} key={index}>
          <Tile classes={tilesClasses[index]} value={tiles[index]} onSquareClick={() => handleClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
}

function Board({ size }) {
  const [history, setHistory] = useState([Array(size*size).fill(null)]);
  const [tilesClasses, setTilesClasses] = useState([Array(size*size).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentTiles = history[currentMove];

  function handleEdit(nextTiles, nextTilesClasses, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextTiles];
    //const updatedClass = [tilesClasses[i] = nextTilesClasses];
    tilesClasses[i] = nextTilesClasses;
    setHistory(nextHistory);
    //setTilesClasses(updatedClass);
    setCurrentMove(nextHistory.length - 1);
  }

  function sizeUpdate() {

  }

  return (
    <Item id="box" className='item' elevation={24}>
      <TileMap tilesClasses={tilesClasses} tiles={currentTiles} size={size} onEdit={handleEdit}/>
    </Item>
  )
}

function App() {
  function updateGridSize(size) {
    console.log(size);
  }

  return (
    <Box  className='baseContainer' sx={{ flexGrow: 1 }}>
      <Board size={10}/>
      <Box className='tileMapSettings'>
        <SizeSlider onChange={updateGridSize}/>
      </Box>
    </Box>
  );
}

function SizeSlider({ onChange }) {
  const [currentValue, setCurrentValue] = useState(0);

  function valuetext(value) {
    return `${value}°C`;
  }
  
  return (
    <Slider onChange={onChange(5)} className='tileAmount'
      aria-label="Always visible"
      defaultValue={15}
      getAriaValueText={valuetext}
      step={1}
      valueLabelDisplay="on"
      min={3}
      max={50}
    />
  );
};

export default App;

import React from "react";
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import { Item } from './tile';
import { TileMap } from './tilemap';

export const Board = forwardRef((props, ref) => {
  const [history, setHistory] = useState([Array(props.sizeX*props.sizeY).fill(null)]);
  const [tilesClasses] = useState(Array(props.sizeX*props.sizeY).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const currentTiles = history[currentMove];

  for (let index = 0; index < tilesClasses.length; index++) {
    tilesClasses[index] = {selected: "", other: ""};
  }

  function handleEdit(nextTiles, nextTilesClasses, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextTiles];
    //const updatedClass = [tilesClasses[i] = nextTilesClasses];
    tilesClasses[i] = {selected: nextTilesClasses, other: tilesClasses[i].other};
    /*tilesClasses.map((value, index) => {
      if (index === i) {
        console.log(value);
        return {selected: nextTilesClasses, other: value.other};
      }
      return value;
    });*/
    console.log(i);
    console.log(tilesClasses);
    console.log(tilesClasses[i]);
    setHistory(nextHistory);
    //setTilesClasses(updatedClass);
    setCurrentMove(nextHistory.length - 1);
    console.log(tilesClasses);
  }

  useImperativeHandle(ref, () => ({
    clearGrid() {
      for (let index = 0; index < tilesClasses.length; index++) {
        tilesClasses[index] = {selected: "", other: ""};
      }
    },
  }))

  return (
    <Box className='boardContainer'>
      <Item className='board' elevation={24}>
        <TileMap tilesClasses={tilesClasses} tiles={currentTiles} sizeX={props.sizeX} sizeY={props.sizeY} onEdit={handleEdit}/>
      </Item>
    </Box>
  )
});
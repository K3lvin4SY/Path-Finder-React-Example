import React from "react";
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import { Item } from './tile';
import { TileMap } from './tilemap';

export const Board = forwardRef((props, ref) => {
  const [tilesClasses, setTilesClasses] = useState(Array(props.sizeX*props.sizeY).fill(""));
  const [currentTiles, setCurrentTiles] = useState(Array(props.sizeX*props.sizeY).fill(""));
  // eslint-disable-next-line

  function handleEdit(i) {
    //const updatedClass = [tilesClasses[i] = nextTilesClasses];
    //tilesClasses[i] = {selected: nextTilesClasses, other: tilesClasses[i].other};
    
    console.log(i);
    console.log("---------------------------------------------");
    //setTilesClasses(updatedClass);
  }

  useImperativeHandle(ref, () => ({
    solveGrid() {
      var values = Array(tilesClasses.length);
      for (let index = 0; index < values.length; index++) {
        values[index] = "tileNr tileNr_"+index;
        
      }
      setTilesClasses(values);
      console.log(tilesClasses);
    },
    mixGrid() {
      for (let i = tilesClasses.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    
        // Swap array[i] and array[j]
        [tilesClasses[i], tilesClasses[j]] = [tilesClasses[j], tilesClasses[i]];
      }
      
      var values = Array(tilesClasses.length);
      for (let index = 0; index < values.length; index++) {
        values[index] = [...tilesClasses][index];
        
      }
      setTilesClasses(values);
      console.log(values);
    },
    clearGrid() {
      setTilesClasses(Array(tilesClasses.length).fill(""));
    },
  }))

  return (
    <Box className='boardContainer'>
      <Item className='board' elevation={24}>
        <TileMap tilesClasses={tilesClasses} tiles={currentTiles} sizeX={props.sizeX} sizeY={props.sizeY} onClick={handleEdit}/>
      </Item>
    </Box>
  )
});
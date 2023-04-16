import React from "react";
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import { Item } from './tile';
import { TileMap } from './tilemap';

export const Board = forwardRef((props, ref) => {
  const [history, setHistory] = useState([Array(props.sizeX*props.sizeY).fill(null)]);
  const [tilesClasses, setTilesClasses] = useState(Array(props.sizeX*props.sizeY).fill(""));
  const [currentMove, setCurrentMove] = useState(0);
  const [currentTileType, setCurrentTileType] = useState("selectedTile");
  // eslint-disable-next-line
  const [pathTiles, setPathTiles] = useState(Array());
  const currentTiles = history[currentMove];

  function handleEdit(nextTiles, nextTilesClasses, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextTiles];
    //const updatedClass = [tilesClasses[i] = nextTilesClasses];
    //tilesClasses[i] = {selected: nextTilesClasses, other: tilesClasses[i].other};
    
    tilesClasses[i] = nextTilesClasses;
    console.log(i);
    console.log(tilesClasses);
    console.log("---------------------------------------------");
    setHistory(nextHistory);
    //setTilesClasses(updatedClass);
    setCurrentMove(nextHistory.length - 1);
  }

  useImperativeHandle(ref, () => ({
    clearGrid() {
      setTilesClasses(Array(tilesClasses.length).fill(""));
      console.log(tilesClasses);
    },
    chnageTileType(tileType) {
      setCurrentTileType(tileType);
    },
  }))

  return (
    <Box className='boardContainer'>
      <Item className='board' elevation={24}>
        <TileMap pathTiles={pathTiles} tileType={currentTileType} tilesClasses={tilesClasses} tiles={currentTiles} sizeX={props.sizeX} sizeY={props.sizeY} onEdit={handleEdit}/>
      </Item>
    </Box>
  )
});
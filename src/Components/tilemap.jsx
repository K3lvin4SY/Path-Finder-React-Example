import React from "react";
import Grid from "@mui/material/Grid";
import { Tile } from './tile';

export function TileMap({ tilesClasses, tiles, sizeX, sizeY, onClick }) {
  function handleClick(i) {
    console.log(i);
    console.log(tilesClasses[i]);
    //onClick(i);
  }


  for (let index = 0; index < tiles.length; index++) {
    if (index != tiles.length-1) {
      tiles[index] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
    } else {
      tiles[index] = "";
    }
  }

  return (
    <Grid style={{ 'aspect-ratio':  (sizeX/sizeY).toString() }} id="tileMap" className='tileMap' container spacing={{ xs: 2, md: 2 }} columns={{ md: sizeX*2 }}>
      {Array.from(Array(sizeX*sizeY)).map((_, index) => (
        <Grid className={tilesClasses[index]} item xs={5} sm={5} md={2} key={index}>
          <Tile classes={tilesClasses[index]} value={tiles[index]} onTileClick={() => handleClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
}
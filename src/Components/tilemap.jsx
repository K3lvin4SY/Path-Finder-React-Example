import React from "react";
import Grid from "@mui/material/Grid";
import { Tile } from './tile';

export function TileMap({ tilesClasses, tiles, sizeX, sizeY, onEdit }) {
  function handleClick(i) {
    const nextTiles = tiles.slice();
    const nextTilesClasses = tilesClasses.slice();
    if (nextTilesClasses[i].selected !== "selectedTile") {
      nextTiles[i] = '';
      //nextTilesClasses[i].selected = "selectedTile";
    } else {
      nextTiles[i] = '';
      //nextTilesClasses[i].selected = "";
    }
    onEdit(nextTiles, "selectedTile", i);
  }
  for (let index = 0; index < tiles.length; index++) {
    tiles[index] = index.toString();
  }

  return (
    <Grid id="tileMap" className='tileMap' container spacing={{ xs: 2, md: 2 }} columns={{ md: sizeX*2 }}>
      {Array.from(Array(sizeX*sizeY)).map((_, index) => (
        <Grid item xs={5} sm={5} md={2} key={index}>
          <Tile classes={tilesClasses[index]} value={tiles[index]} onTileClick={() => handleClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
}
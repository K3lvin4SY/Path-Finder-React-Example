import React from "react";
import Grid from "@mui/material/Grid";
import { Tile } from './tile';

export function TileMap({ tilesClasses, tiles, sizeX, sizeY, tileType, pathTiles, onEdit }) {
  function handleClick(i) {
    const nextTiles = tiles.slice();
    const nextTilesClasses = tilesClasses.slice();

    if (nextTilesClasses[i] === undefined) {
      nextTilesClasses[i] = "";
    }

    if (!nextTilesClasses[i].includes(tileType)) {
      nextTiles[i] = '';

      // update pathTiles list
      if (tileType === "pathTile") {
        pathTiles.push(i);
      } else if (tileType !== "pathTile") {
        pathTiles.forEach((element, index) => {
          if (element === i) {
            if (index > -1) {
              pathTiles.splice(index, 1);
            }
          }
        });
      }

      // updates tile classes
      nextTilesClasses[i] = tileType;
    } else {
      nextTiles[i] = '';

      // update pathTiles list
      if (tileType === "pathTile") {
        pathTiles.forEach((element, index) => {
          if (element === i) {
            if (index > -1) {
              pathTiles.splice(index, 1);
            }
          }
        });
      }

      // updates tile classes
      nextTilesClasses[i] = nextTilesClasses[i].replace(tileType, "");
    }
    console.log(pathTiles);
    onEdit(nextTiles, nextTilesClasses[i], i);
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
import React from "react";
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Tile({ classes, value, onTileClick }) {
  const classNames = "tile "+classes//+classes.selected+" "+classes.other
  return (
    <Item className={classNames} onClick={onTileClick}>
      {value}
    </Item>
  );
}
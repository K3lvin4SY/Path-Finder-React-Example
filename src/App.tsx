import React from 'react';
import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Slider } from '@mui/material';
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function valuetext(value: number) {
  return `${value}°C`;
}



const MySlider = () => {
  const [currentValue, setCurrentValue] = useState(0);

  function updateGrid() {
  
  }
  
  return (
    <Slider onChange={updateGrid} className='tileAmount'
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

const playGrid = () => {
  var size = 15; 
  return (
    <Grid className='tileMap' container spacing={{ xs: 2, md: 2 }} columns={{ md: size*2 }}>
      {Array.from(Array(size*size)).map((_, index) => (
        <Grid item xs={5} sm={5} md={2} key={index}>
          <Item className='tile'></Item>
        </Grid>
      ))}
    </Grid>
  )
}

function App() {
  return (
    <Box className='baseContainer' sx={{ flexGrow: 1 }}>
          <Item className='item' elevation={24}>
              {playGrid()}
          </Item>
          <Box className='tileMapSettings'>
            
          </Box>
          
    </Box>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;

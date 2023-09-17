import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PathFinder from "./pages/PathFinder";
import SlidePuzzle from "./pages/SlidePuzzle";
import NoPage from "./pages/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="pathFinder" element={<PathFinder/>}/>
          <Route path="slidePuzzle" element={<SlidePuzzle/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);




/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import PathFinder from './pages/PathFinder.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="pathFinder" element={<PathFinder/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

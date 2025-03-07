import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero.js'
import Featured from './pages/Featured.js';
import Content from './components/Content/Content.js';
import { Box } from '@mui/material';
import {server} from './config.js';


const response = await fetch("http://127.0.0.1:3001/heroMovies");
const newData = await response.json();
console.log(newData);
function App() {
  
  const [ moviesTV, setMoviesTV] = useState([]);
  const [ heroBanners, setHeroBanners] = useState([]);
  window.scrollTo(0, 0);
  useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch(`${server}/moviesTv`);
        const newData = await response.json();
        setMoviesTV(newData);
    };
    fetchData();
  }, []);
  useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch(`${server}/heroMovies`);
        const newData = await response.json();
        setHeroBanners(newData);
    };
    fetchData();
  }, []);
  return (
    <Box >
      <Box sx={{margin: "8px"}}>
        <Hero moviesTV={heroBanners}/>
      </Box>
      <Box sx={{margin: "8px"}}>
        <Featured title="Featured Movies" featuredList={moviesTV.filter((mv)=> (mv.featured === true && mv.type==="Movie"))}/>
      </Box>
      <Box sx={{margin: "8px"}}>
        <Featured title="Featured TV" featuredList={moviesTV.filter((mv)=> (mv.featured === true && mv.type==="TV"))}/>
      </Box>
      <Box sx={{margin: "8px"}} >
        <Content />
      </Box>
    </Box>
  );
}

export default App;

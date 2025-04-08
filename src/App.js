import Hero from './components/Hero/Hero.js'
import Featured from './pages/Featured.js';
import Content from './components/Content/Content.js';
import { Box } from '@mui/material';
import {heroMovies} from './heroBanner.js';

function App() {
  window.scrollTo(0, 0);
  
  return (
    <Box >
      <Box sx={{margin: "8px"}}>
        <Hero moviesTV={heroMovies}/>
      </Box>
      <Box sx={{margin: "8px"}}>
        <Featured title="Featured Movies" category="movies"/>
      </Box>
      <Box sx={{margin: "8px"}}>
        <Featured title="Featured TV" category="TVs"/>
      </Box>
      <Box sx={{margin: "8px"}} >
        <Content />
      </Box>
    </Box>
  );
}

export default App;

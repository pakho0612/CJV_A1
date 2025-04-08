import { Box, Card, CircularProgress, Grid, ImageList, Skeleton, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listing(props){
    const [moviesTV, setMoviesTV] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(()=>{
      const fetchData = async () => {
          const response = await fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/${props.category}`);
          const newData = await response.json();
          setMoviesTV(newData.body);
      };
      fetchData();
    }, []);
    useEffect(()=>{
      const fetchData = async () => {
          const response = await fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/${props.category}?title=${searchText}`);
          const newData = await response.json();
          setMoviesTV(newData.body);
      };
      fetchData();
    }, [searchText]);
    return(
        <Box sx={{ 
          backgroundImage:`url(https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)`,
          backgroundRepeat: "repeat",
          minHeight: '80vh'}}>
          <Stack alignItems="center">
            <Card sx={{ width: '90%', margin: '20px' }}>
              <Stack alignItems="center" sx={{ width: '90%', margin: '20px' }}>
                <TextField id="outlined-basic" label="Search Here" variant="outlined" value={searchText} onChange={(event) => {setSearchText(event.target.value)}}/>
              </Stack>
              {(moviesTV!==null)?
              (
                <Grid container spacing={1} justifyContent="center">
                    {moviesTV.map((item, ind) => (
                      <Grid item key={ind}>
                        <Link to={`/listing/${item.id}`}>
                          <Box key={item.id} 
                            component={"img"}
                              src={item.smallPoster}
                              alt={item.title}
                              style={{ borderRadius: '8px' }}>
                                
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
                ) : (
                  <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    <Stack alignItems="center" sx={{ width: '90%', margin: '20px' }}>
                      Result Not Found  
                    </Stack>
                  </Grid>
                )
              }
        
            </Card>
          </Stack>
        </Box>
    )
}
  

export default Listing;
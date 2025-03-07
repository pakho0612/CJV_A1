import { Box, CircularProgress, Grid, ImageList, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../config";

function Listing(){
    const numPerRow = 6;
    const [moviesTV, setMoviesTV] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`${server}/moviesTv`);
            const newData = await response.json();
            setMoviesTV(newData);
        };
        fetchData();
    }, []);
    return(
       (moviesTV!==undefined)?
       (
        <Box sx={{ 
          backgroundImage:`url(https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)`,
          backgroundRepeat: "repeat",
          minHeight: '80vh'}}>
          <Grid container spacing={2}>
              {moviesTV.map((item, ind) => (
                <Grid item key={ind} sx={{
                  flexGrow: 1,
                  justifyContent: 'flex-end'}}>
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
        </Box>
      ) : (
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          <CircularProgress />
          <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={numPerRow} gap={8}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </ImageList>
        </Grid>
          )
      
    )
}
  

export default Listing;
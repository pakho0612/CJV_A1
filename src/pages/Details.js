import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../config";

function Details(){
    const movieID = useParams().id;
    const [ moviesTV, setMoviesTV] = useState();
    const navigate = useNavigate();
      
    useEffect(()=>{
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const response = await fetch(`${server}/moviesTv/${movieID}`);
            const newData = await response.json();
            setMoviesTV(newData);
        };
        fetchData();
      }, []);
    return(
        <Box >
            {
                moviesTV!==undefined?(
                    <Box >
                        <Box padding={'10px'}>
                            <Button variant="text"onClick={()=>navigate(-1)}>Back</Button>
                        </Box>
                        <Box sx={{
                            minHeight: '80vh'}}>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <Typography variant="h5">
                                    {moviesTV.title}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'10px'}
                            >
                                <img src={moviesTV.smallPoster}
                                    alt={moviesTV.title}
                                />
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.secondary">
                                    {moviesTV.type}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.secondary">
                                    {`Rating: ${moviesTV.rating}`}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                            {
                                moviesTV.genre.map((item)=>(
                                    <Typography style={{display: 'inline-block'}} color="text.secondary">
                                    <Box m={0.5}>{item}</Box>
                                    </Typography>
                                ))
                            }
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.primary">
                                    {`Released on ${moviesTV.releaseDate}`}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.primary">
                                    {` ${moviesTV.views}`}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.primary">
                                    {`Price to rent: ${moviesTV.priceToRent}`}
                                </Typography>
                            </Box>
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding={'5px'}
                            >
                                <Typography  color="text.primary">
                                    {`Price to buy: ${moviesTV.pricePurchase}`}
                                </Typography>
                            </Box>
                            <Box
                                justifyContent="center"
                                alignItems="center"
                                mx= '20%'  
                                padding={'5px'}
                            >
                                <Typography variant="body2">
                                    {moviesTV.synopsis}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ):(
                    <CircularProgress />
                )
            }
        </Box>
    )
}

export default Details;

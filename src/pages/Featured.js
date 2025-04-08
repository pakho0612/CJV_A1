import { Box, Card, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Featured(props){
    const [featuredList, setFeaturedList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/${props.category}?featured=True`);
            const newData = await response.json();
            setFeaturedList(newData.body);
        };
        fetchData();
    }, []);
    return(
        <Box sx={{  
            backgroundImage:`url(https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)`,
            backgroundRepeat: "repeat",
            padding: 2}}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    marginBottom: 2, 
                    fontWeight: 'bold', 
                    textAlign: 'center' 
                }}
            >
                {props.title}
            </Typography>
        { 
        (
        featuredList.length>0)?(
                
            <Stack >
                <Card sx={{ width: '90%', margin: '20px' }}>
                    <Grid container spacing={0.5} justifyContent="center">
                            {
                                featuredList.map((mv, ind) => (
                                <Grid item >
                                    <Box component={Link} to={`/listing/${mv.id}`}>
                                    <img src={mv.smallPoster}
                                        alt={mv.title}
                                        loading="lazy"
                                        style={{ borderRadius: '8px' }}
                                    /></Box>
                                </Grid>
                                ))
                            }
                    </Grid>
                </Card>
            </Stack>
        ):(
            <><CircularProgress />Loading</>
        )}
        </Box>
    )
}

export default Featured;
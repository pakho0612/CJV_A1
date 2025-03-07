import { Box, Card, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Featured(props){
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
        props.featuredList!==undefined)?(
                
            <Stack >
                <Card sx={{ width: '90%', margin: '20px' }}>
                    <Grid container spacing={0.5} justifyContent="center">
                            {
                                props.featuredList.map((mv, ind) => (
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
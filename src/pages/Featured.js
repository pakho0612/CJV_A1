import { Box, CircularProgress, Typography } from "@mui/material";
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
                <Box display="grid" gridTemplateColumns={`repeat(${props.featuredList.length}, 1fr)`} gap={2}>
                    {
                        props.featuredList.map((mv) => (
                            <Box component={Link} to={`/listing/${mv.id}`}>
                            <img src={mv.smallPoster}
                                alt={mv.title}
                                loading="lazy"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            </Box>
                        ))
                    }
                </Box>
        ):(
            <><CircularProgress />Loading</>
        )}
        </Box>
    )
}

export default Featured;
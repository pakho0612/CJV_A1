import { Box, Card, CardContent, Typography } from "@mui/material";

function Content(){
    return(
        <Box sx={{  
            backgroundImage:`url(https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)`,
            backgroundRepeat: "repeat",
            backgroundColor: 'secondary.main', 
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
                    More Reasons to Join
            </Typography>

            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" m={2} gap={2}>
                <Card>
                    <Box sx={{margin: "8px"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Enjoy on your TV
                            </Typography>
                            <Typography variant="body2">
                                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                            </Typography>
                        </CardContent>
                    </Box >
                </Card>
                <Card>
                    <Box sx={{margin: "8px"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Download your shows to watch offline
                            </Typography>
                            <Typography variant="body2">
                                Save your favorites easily and always have something to watch.
                            </Typography>
                        </CardContent>
                    </Box >
                </Card>

                
                <Card>
                    <Box sx={{margin: "8px"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Watch everywhere
                            </Typography>
                            <Typography variant="body2">
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
                        </CardContent>
                    </Box >
                </Card>
                <Card>
                    <Box sx={{margin: "8px"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Create profiles for kids
                            </Typography>
                            <Typography variant="body2">
                                Send kids on adventures with their favorite characters in a space made just for them — free with your membership.
                            </Typography>
                        </CardContent>
                    </Box >
                </Card>
            </Box>
        </Box>
    )
}

export default Content;
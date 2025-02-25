import { Box, Button, Toolbar, Typography } from "@mui/material";
import * as styles from '../../styles.js';


const pages = [
                {
                    name:'Movies&TV', 
                    link:'/movieTvListing'
                },
                {
                    name:'my Vudu', 
                    link:'/myvudu'
                }];

function NavBar (){
    return(
        <>
                <Box sx={styles.box}>
                    {pages.map((page) => (
                    <Button key={page.name} sx={styles.button} href={page.link}>
                        <Typography variant="h6" noWrap component="a" sx={styles.typography}>
                            {page.name}
                        </Typography>
                    </Button>
                ))}
                </Box>
                <Button key='Signin'sx={styles.button} href='/signin'>
                    <Typography variant="h6" noWrap component="a" sx={styles.typography}>
                            Sign in
                    </Typography>
                </Button>
                <Button key='Login' sx={styles.button} href='/login'>
                    <Typography variant="h6" noWrap component="a" sx={styles.typography}>
                            Log in
                    </Typography>
                </Button>
                </>
    )
}

export default NavBar;
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import NavBar from './components/Navbar/NavBar.js';
import * as styles from './styles.js';

function Header (){
    return(
    <AppBar position="static">
        <Container maxWidth="xl">
            
            <Toolbar disableGutters>
                <Typography variant="h6" noWrap component="a" href="/" sx={styles.typography}>
                    HOME
                </Typography>
                <NavBar />
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Header;
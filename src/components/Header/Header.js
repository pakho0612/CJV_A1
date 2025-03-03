import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import NavBar from '../Navbar/NavBar.js';
import { Link } from 'react-router-dom';

function Header (){
    return(
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box component={Link} to='/'>
                    <Button sx={{ color: '#fff' }}>
                        HOME
                    </Button>
                </Box>
                <NavBar />
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Header;
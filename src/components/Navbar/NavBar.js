import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";


const pages = [
                {
                    name:'Movies&TV', 
                    link:'/listing'
                }];

function NavBar (){
    return(
        <>
            {pages.map((page) => (
                <Box component={Link} to={page.link}>
                    <Button sx={{ color: '#fff' }}>
                        {page.name}
                    </Button>
                </Box>
            ))}
            <Box sx={{ marginLeft: "auto" }} component={Link} to='/signup'>
                <Button sx={{ color: '#fff' }}>
                    Sign Up
                </Button>
            </Box>
            <Box  component={Link} to='/login'>
                <Button  sx={{ color: '#fff' }}>
                    Log In
                </Button>
            </Box>
        </>
    )
}

export default NavBar;
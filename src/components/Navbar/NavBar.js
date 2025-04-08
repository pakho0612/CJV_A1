import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Layout";


const pages = [
                {
                    name:'Movies', 
                    link:'/listing/movies'
                },
                {
                    name:'TVs', 
                    link:'/listing/TVs'
                },
            ];

function NavBar (){
    const {loggedIn, setLoggedIn} = useContext(userContext);

    const handleLogout = ()=>{
        setLoggedIn(false);
        sessionStorage.removeItem("user");
    };
    return(
        <>
            {pages.map((page) => (
                <Box component={Link} to={page.link}>
                    <Button sx={{ color: '#fff' }}>
                        {page.name}
                    </Button>
                </Box>
            ))}
            {
                !loggedIn?(
                    <>
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
                ) : (
                    <>
                    <Box sx={{ marginLeft: "auto" }} component={Link} to='/user'>
                        <Button sx={{ color: '#fff' }}>
                            DashBoard
                        </Button>
                    </Box>
                    <Box component={Link} to='/'>
                        <Button  sx={{ color: '#f00' }} onClick={()=>handleLogout()}>
                            Log Out
                        </Button>
                    </Box>
                    </>
                )
            }
        </>
    )
}

export default NavBar;
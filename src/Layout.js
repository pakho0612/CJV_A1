import { ThemeProvider } from "@emotion/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Box, createTheme } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({
    loggedIn:false
});

function Layout({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        if (sessionStorage.getItem('user')){
            setLoggedIn(true);
        }
        setLoading(false);
    },[]);
    const theme = createTheme({
    palette: {
        backgroundColor:'#3a393a',
        primary: {
            light: '#757ce8',
            main:'#15001f',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            main:'#d07cf7',
        }
    },
    });
    return (
        <ThemeProvider theme={theme} >
            <userContext.Provider value={{loggedIn, setLoggedIn, loading}}>
                <Header />
                <Box>
                    {children}
                </Box>
                <Box margin-top= 'auto'>
                    <Footer />
                </Box>
            </userContext.Provider>
        </ThemeProvider>
    )
}

export default Layout;
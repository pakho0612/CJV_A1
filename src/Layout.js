import { ThemeProvider } from "@emotion/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Box, createTheme } from "@mui/material";

function Layout({children}){
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
                <Header />
                <Box>
                    {children}
                </Box>
                <Box margin-top= 'auto'>
                    <Footer />
                </Box>
        </ThemeProvider>
    )
}

export default Layout;
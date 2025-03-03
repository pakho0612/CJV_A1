import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log({ email, password });
    };

    const handleSignUpRedirect = () => {
        
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '80vh', 
                backgroundColor: '#f5f5f5', 
                padding: '20px' 
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <TextField 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: '20px' }}
                >
                    Login
                </Button>
                <Button 
                    variant="text" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: '10px' }} 
                    onClick={handleSignUpRedirect}
                >
                    Sign Up
                </Button>
            </form>
        </Box>
    );
}

export default Login;
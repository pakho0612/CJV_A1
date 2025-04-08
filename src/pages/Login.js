import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../Layout';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loggedIn, setLoggedIn} = useContext(userContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/auth`,
            {
                method:'POST',
                body:JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(async res => {
            const serverRes = await res.json();
            if(res.status==200){
                const user = serverRes.body[0];
                sessionStorage.setItem('user', JSON.stringify({ id:user.id }));
                setLoggedIn(true);
                navigate('/user');
            }
            else{
                alert(serverRes.message);
            }
        })
        console.log({ email, password });
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
                    required
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    required
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
                <Box  component={Link} to='/signup' >
                    <Button 
                        variant="text" 
                        color="primary" 
                        fullWidth 
                        sx={{ marginTop: '10px' }} 
                    >
                        Sign Up
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default Login;
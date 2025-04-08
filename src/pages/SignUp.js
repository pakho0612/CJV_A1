import React, { useContext, useState } from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Layout';

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [message, setMessage] = useState('');
    const {loggedIn, setLoggedIn} = useContext(userContext);

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ firstName, lastName, email, password, termsAccepted });
        fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/users`, 
            {
                method:'POST',
                body:JSON.stringify({ firstName, lastName, email, password }),
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
                setMessage(serverRes.message);
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '100vh', 
                backgroundColor: '#f5f5f5', 
                padding: '20px' 
            }}
        >
            <Typography variant="h4" gutterBottom>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <TextField 
                    required
                    label="First Name" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                <TextField 
                    required
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
                <TextField 
                    required
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={email} 
                    inputProps={{pattern:"\\w+@\\w+\\.com"}}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {message}
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
                <FormControlLabel 
                    required
                    control={
                        <Checkbox 
                            checked={termsAccepted} 
                            onChange={(e) => setTermsAccepted(e.target.checked)} 
                        />
                    } 
                    label="I accept the terms and conditions" 
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: '20px' }}
                >
                    Sign Up
                </Button>
            </form>
        </Box>
    );
}

export default Registration;
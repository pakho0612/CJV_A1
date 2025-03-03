import React, { useState } from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ firstName, lastName, email, password, termsAccepted });
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
                    label="First Name" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                <TextField 
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
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
                <FormControlLabel 
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
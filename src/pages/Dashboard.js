import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Dashboard() {
    const [user, setUser] = useState();
    useEffect(() => {
    const fetchData = async () => {
        const id = JSON.parse(sessionStorage.user).id;
        const response = await fetch(`${process.env.REACT_APP_WEB_SERVER_URL}/users/${id}`);
        const newData = await response.json();
        setUser(newData.body[0]);
    };
    fetchData();
    }, []);

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
                User Dashboard
            </Typography>
            {
                user!==undefined ?(
                <Card sx={{ width: '100%', maxWidth: '400px' }}>
                    <CardContent>
                        <Typography variant="h6">First Name: {user.firstName}</Typography>
                        <Typography variant="h6">Last Name: {user.lastName}</Typography>
                        <Typography variant="h6">Email: {user.email}</Typography>
                        <Typography variant="h6">User ID: {user.id}</Typography>
                    </CardContent>
                </Card>
                ) : (
                    <CardContent></CardContent>
                )
            }
        </Box>
    );
}

export default Dashboard;

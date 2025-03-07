import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ 
            backgroundColor: 'primary.main', 
            color: 'white', 
            padding: '20px',
            marginTop: "auto"
        }} >
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Watch
                    </Typography>
                    <Typography variant="body2">
                        Spotlight<br />
                        Movies<br />
                        TV<br />
                        Free<br />
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        My Account
                    </Typography>
                    <Typography variant="body2">
                        Account<br />
                        Settings<br />
                        Manage Devices<br />
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Features
                    </Typography>
                    <Typography variant="body2">
                        Lists<br />
                        Family<br />
                        Disc to Digital<br />
                        InstaWatch<br />
                        Movies Anywhere<br />
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Help
                    </Typography>
                    <Typography variant="body2">
                        About Us<br />
                        Devices<br />
                        Support<br />
                        Forums<br />
                        Contact Us<br />
                        Jobs<br />
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} FakeVudu. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
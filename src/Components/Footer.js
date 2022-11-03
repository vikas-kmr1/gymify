import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4" display="flex"
         alignItems="center"
         justifyContent="center">
        <Stack direction={"column"}  sx={{ alignItems: 'center' }} flexWrap="wrap">
        <Stack direction={"row"} gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }}/>
            <Typography  variant="h1" fontWeight="bold"  sx={{  fontSize: { lg: '38px', xs: '30px' } }}  mt="41px" textAlign="center" pb="40px">Gymify</Typography>
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="4px" textAlign="center" pb="40px">Made with ❤️ in React</Typography>
        </Stack>
    </Box>
);


export default Footer;
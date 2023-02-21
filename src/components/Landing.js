import React from 'react';
// mui 
import {Box, Stack, Container, Typography, Button} from "@mui/material";
// images
import landingImg from "../assets/landing_img.png";

const Landing = () => {
  return (
    <Box sx={{marginBottom:'50px'}} >
        <Container sx={{height:'100%'}}>
            <Box display='flex' height="100%" justifyContent="space-between" alignItems='center' flexWrap='wrap' >
                <Stack flex="1" maxWidth="365px" spacing={2} >
                    <Typography variant="h5" sx={{color:'#45C0BE', fontWeight:'bold'}} >We Fill Your Gap</Typography>
                    <Typography variant="body1">
                        We are ready to bring you all your needs anywhere at any time through our useful mobile application. 
                        No need to waste time you are one click away.
                    </Typography>
                    <Button className="gradient_btn" variant='contained' sx={{borderRadius:'30px', width:'fit-content', fontWeight:'bold'}}>
                        Install Now
                    </Button>
                </Stack>
                <Stack sx={{display:{xs:'none', md:'block'}}}>
                    <img src={landingImg} alt="landing_img" width='350px' height='350px' />
                </Stack>
            </Box>
        </Container>
    </Box>
  )
}

export default Landing
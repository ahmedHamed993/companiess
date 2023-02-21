import React from 'react'
// mui 
import {Box, Stack, Container, Typography, Button} from "@mui/material";
//images 
import aboutImg from "../assets/about_img.png";
const About = () => {
  return (
    <Box sx={{marginBottom:'50px'}}>
        <Container>
            <Box sx={{width:'100%'}} display='flex' justifyContent='space-between' alignItems='center'>
                <Box sx={{display:{xs:'none', md:'block'}}}>
                    <img src={aboutImg} width='500px' />
                </Box>
                <Stack flex="1" maxWidth="365px" spacing={2} >
                    <Typography variant="h5" sx={{color:'#45C0BE', fontWeight:'bold'}} >We Fill Your Gap</Typography>
                    <Typography variant="body1">
                    We Offer you different kinds of services that will help you save your time and be more comfortable. 
                    </Typography>
                    <Button className="gradient_btn" variant='contained' sx={{borderRadius:'30px', width:'fit-content', fontWeight:'bold'}}>
                        Our Services
                    </Button>
                </Stack>
            </Box>
        </Container>
    </Box>
  )
}

export default About
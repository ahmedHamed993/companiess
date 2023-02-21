import React from 'react';
// my components 
import {Navbar} from "../components";
// mui 
import {Box, Stack, Typography, Container} from "@mui/material";
import footerBG from "../assets/footer_bg.png";
import logo2 from "../assets/logo_2.png";

const Footer = () => {
  return (
        <Box 
            sx={{position:'relative', padding:'180px 0 30px'}}
        >
            {/* bg   */}
            <Box
                sx={{
                    backgroundImage:`url(${footerBG})`, 
                    backgroundSize:'100% 100%',
                    backgroundRepeat:'no-repeat', 
                    backgroundPosition:'center',
                    // height:'251px',
                    position:'absolute',
                    bottom:'0',
                    left:'0',
                    zIndex:'-1',
                    height:'100%',
                    width:'100%',   
                }} 
            ></Box>
            <Container>
                <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='space-between' width="100%" gap='20px'>
                    <Box  color='white' flex='1' display='flex' alignItems='flex-start' flexDirection='column' minWidth='300px'>
                        <Typography variant="h6">About Us</Typography>
                        <Stack spacing={2} direction='row'>
                            <a href="#"> Our History</a>
                            <a href="#"> How We Work</a>
                            <a href="#">Resources</a>
                        </Stack>
                    </Box>
                    <Box flex='1' display='flex' justifyContent='center' minWidth='300px'>
                        <img src={logo2} alt="forall" width='125px' height='125px' />
                    </Box>
                    <Box sx={{color:'white'}}  flex='1' display='flex' alignItems='center' flexDirection='column' minWidth='300px'>
                        <Typography variant="h6">Saudi Arabia</Typography>
                        <Stack spacing={1} direction='column'>
                            <Typography variant="h6">Saudi Arabia</Typography>
                            <Typography variant="h6">Saudi Arabia</Typography>

                        </Stack>
                    </Box>
                </Box>
               
            </Container>
        </Box>
  )
}

export default Footer
import React from 'react';
// my components 
import {Navbar} from "../components";
// mui 
import {Box} from "@mui/material";
import headerBG from "../assets/header_bg.png";
import logo from "../assets/logo.png";
const Header = () => {
  return (
        <Box 
            sx={{position:'relative'}}
        >
            <Box
                sx={{
                    backgroundImage:`url(${headerBG})`, 
                    backgroundSize:'100% 100%',
                    backgroundRepeat:'no-repeat', 
                    backgroundPosition:'center',
                    height:'251px',
                    position:'absolute',
                    top:'0',
                    left:'0',
                    zIndex:'-1',
                    // height:'350px',
                    width:'100%',   
                }} 
            >
            </Box>
            <Navbar />
            <Box width="100%" display='flex' justifyContent='center' sx={{transform:'translateY(-30px)'}}>
                <img src={logo} alt="forall" width='125px' height='125px' />
            </Box>
        </Box>
  )
}

export default Header
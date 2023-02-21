import React from 'react';
// router 
import {Link} from "react-router-dom"
// mui 
import {Box, Container, Button} from "@mui/material";
// images 
import menuIcon from "../assets/menu_icon.png";
// utils 
import {navbarLinks} from "../utils/navbarLinks";

const Navbar = () => {
  return (
    <Box sx={{padding:'10px 0'}}>
        <Container>
            <Box width="100%" display='flex' justifyContent='space-between' alignItems="center">
                <Button>
                    <img src={menuIcon} alt="menu-icon" width='30px' height='30px' />
                </Button>
                <Box sx={{color:'white'}} display='flex' justifyContent='flex-start' alignItems='center' gap="30px">
                    {
                        navbarLinks.map(item => {
                            return (
                                <Link to="/" >{item}</Link>
                            )
                        })
                    }
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar
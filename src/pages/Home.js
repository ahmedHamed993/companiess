import React, {useState, useEffect} from 'react';
// components 
import {Header, Landing, About, Providers, Footer} from "../components";
// mui 
import { Box } from '@mui/material';
const Home = () => {
    return (
        <Box>
           <Header />
           <Landing />
           <About />
           <Providers />
           <Footer />

        </Box>
    )
}

export default Home
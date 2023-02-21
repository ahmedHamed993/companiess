import React, { useState, useEffect } from 'react'
// mui 
import {Box, Stack, Container, Typography, Button} from "@mui/material";
// axios 
import axios from "axios";
// images 
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";
import CompanyCard from './CompanyCard';

const Providers = () => {
    const [providers, setProviders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    function handleResize(){
        if(window.innerWidth < 750)
        {
            setItemsPerPage(1);
            return 0;
        }
        else if(window.innerWidth < 1000)
        {
            setItemsPerPage(2);
            return 0;
        }
        else 
        {
            setItemsPerPage(3)
        }
    }
    useEffect(()=>{
        handleResize();
        axios({
            method:'get',
            url:`https://forall.sa/services/api/ads/companies?page=${currentPage}&page_count=${itemsPerPage}`
        })
        .then(res => {
            setProviders(res.data.data);
            setIsLoading(false);
            setTotalItems(res.data.pagination.meta.pages);
        });
    },[currentPage, itemsPerPage])
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=> window.removeEventListener('resize', handleResize)
    },[])
    return (
        <Box>
            <Stack>
                <Typography variant="h4" sx={{color:'#45C0BE', textAlign:'center', fontWeight:'bold', marginBottom:'10px'}} >
                    Our Providers
                </Typography>
            </Stack>
            <Box sx={{background:'#EEF8FF'}}>
                <Container>
                    <Box width='100%' display='flex' alignItems='center' gap="10px" py={4}>
                        <Button onClick={()=>setCurrentPage(prev => prev-1)}>
                            <img src={leftArrow} />
                        </Button>
                        <Box sx={{flex:'1', display:'flex', justifyContent:'space-around',}}>
                            {
                                providers.map(item => <CompanyCard id={item.id} img={item.logo['128px']} name={item.name.value} />)
                            }
                        </Box>
                        <Button onClick={()=>setCurrentPage(prev => prev+1)}>
                            <img src={rightArrow} />
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
  )
}

export default Providers
import React, {useState, useEffect} from 'react'
// react-router 
import { useParams } from 'react-router';
// mui components 
import {Box, Stack, Container, Avatar, Typography} from "@mui/material";
// axios 
import axios from "axios";
// socails links 
import {socialLinksIconsTitles} from "../utils/socialLinks.js";
import { Link } from 'react-router-dom';

const CompanyDetail = () => {
    const {id} = useParams();
    const [companyDetails, setCompanyDetails] = useState(null);
    const [companies, setComapnies] =  useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setIsLoading(true);
        axios({
            method:'get',
            url:`https://forall.sa/services/api/ads/companies?id=${id}`,
        })
        .then(res => {
            setComapnies(res.data.data);
        })
    },[id])
    
    useEffect(()=>{
        if(companies !== null)
        {
            // filter data come from api it returns two companies take one which id equal desired id
            let one = companies.filter(comp => comp.id == id)
            one = one[0];
            one ? setCompanyDetails(one ) : setCompanyDetails([]);
            // set links to social icons we create a
            for(let k in one.social_links)
            {
                socialLinksIconsTitles.forEach(el => {
                    if(el.title.toLocaleLowerCase() == k.toLocaleLowerCase())
                    {
                        if(k == 'company_mobile')
                        {
                            el.link = `tel:${one.social_links[k]}`;
                        }
                        else if(k.toLocaleLowerCase() == 'whatsapp' && one.social_links[k] != '')
                        {
                            el.link = `https://wa.me/${one.social_links[k]}`;
                        }
                        else 
                        {
                            el.link = one.social_links[k];
                        }
                    }
                })
            }
            setIsLoading(false);
        }
    },[companies])
    return (
        <Container>
            {
                isLoading || companyDetails == [] ? 
                <h2 style={{textAlign:'center'}}>Loading......</h2>
                :
                <Stack spacing={2} py={4} >
                    <Typography variant="h2" component="h1"> {companyDetails.name.value} Details </Typography>
                    <Avatar 
                        src={companyDetails.logo['512px']} 
                        variant="square" 
                        sx={{width:{xs:'256px', sm:'512px'}, flex:'1', height:'200px', objectFit:'cover'}} 
                    />
                    <Typography variant="h5">our socials</Typography>
                    <Box display='flex' gap='10px' flexWrap="wrap">
                        {
                            socialLinksIconsTitles.map(el => {
                                const {title, icon, link} = el;
                                if(link !== "")
                                {
                                    return (
                                        <Box 
                                            key={title}
                                            component={Link} 
                                            display='flex' 
                                            justifyContent='center' 
                                            alignItems='center' 
                                            sx={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#ddd'}}
                                        >
                                            <span style={{fontSize:'18px'}}>
                                                {icon}
                                            </span>
                                        </Box>
                                    )
                                }
                            })
                        }
                    </Box>
                </Stack>
            }
        </Container>
    )
}

export default CompanyDetail
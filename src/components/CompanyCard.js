import React from 'react'
// mui 
import {Stack, Avatar, Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CompanyCard = ({name, img, id}) => {
    return (
        <Stack 
            spacing={2} 
            width="133px" 
            sx={{borderRadius:"10px", backgroundColor:'#B6E1DA', padding:'25px 20px'}}  
            component={Link} 
            to={`/company/${id}`}
        >
            <Avatar src={img} variant="rounded" sx={{width:'128px', height:'128px'}} />
            <Box p={1} display='flex' justifyContent='center'>
                <Typography variant="body2" sx={{wordBreak:'break-all', color:'black', fontWeight:'bold', textTransform:'capitalize'}}>{name}</Typography>
            </Box>
        </Stack>
    )
}

export default CompanyCard;


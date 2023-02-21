<Stack sx={{minHeight:'100vh'}} py={2} spacing={4} >
<Typography variant="h2" sx={{textAlign:'center'}} >Our Supporter</Typography>
{
    isLoading? <h3 style={{textAlign:'center'}}>Loading.....</h3> :
    <>
        <Box display='flex' justifyContent='center' alignItems='center' gap='20px' flexWrap="wrap">
            {
                companies.map(item => <CompanyCard id={item.id} img={item.logo['256px']} name={item.name.value}/>)
            }
        </Box>
        <Box width='100%' display='flex' justifyContent='center'>
            <Pagination count={totalItems} page={currentPage} onChange={paginate} />

        </Box>
    </>
}
</Stack>

    // change page from pagination
    const paginate = (e, value)=>{
        setCurrentPage(value);
    }
    useEffect(()=>{
        setIsLoading(true);
        axios({
            method:'get',
            url:`https://forall.sa/services/api/ads/companies?page=${currentPage}`,
        })
        .then(res => {
            setCompanies(res.data.data);
            setIsLoading(false);
            setTotalItems(res.data.pagination.meta.pages);
        })
        .catch(error => console.log(error));

    },[currentPage])

    const [companies, setCompanies] = useState([]);
const [itemPerPage, setItemPerPage] = useState(9);
const [currentPage, setCurrentPage] = useState(1);
const [totalItems, setTotalItems] = useState(0);
const [isLoading, setIsLoading] = useState(true);
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { BsFillLightbulbFill, BsPerson } from 'react-icons/bs';
  import { FiUser } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import { RiAdminFill, RiProductHuntLine } from "react-icons/ri"
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        backgroundColor="cyan.100" 
        mb="1rem">
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'bold'} isTruncated >
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function StatsMainDashboard({totalPly,admins,users,bulbs,machines}) {
    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
      <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
<div>
<div className='content-body'>
          <div className='container-fluid mt-3'>
            <div className='row'>
              <div className='col-lg-3 col-sm-6'>
              <div className='card gradient-3'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Total Products</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>4565</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-2'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Total-- Posts</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>8541</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-money' />
                    </span> */}
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-3'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Client Visited</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>4565</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-users' />
                    </span> */}
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-2'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>
                      Companies Registered
                    </h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>99%</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-heart' />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='card'>
                      {/* <div className='card-body pb-0 d-flex justify-content-between'>
                        <div>
                          <h4 className='mb-1'>Product Sales</h4>
                          <p>Total Earnings of the Month</p>
                          <h3 className='m-0'>$ 12,555</h3>
                        </div>
                        <div>
                          <ul>
                            <li className='d-inline-block mr-3'>
                              <a className='text-dark' href='#'>
                                Day
                              </a>
                            </li>
                            <li className='d-inline-block mr-3'>
                              <a className='text-dark' href='#'>
                                Week
                              </a>
                            </li>
                            <li className='d-inline-block'>
                              <a className='text-dark' href='#'>
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <div className='chart-wrapper'>
                        <canvas id='chart_widget_2' />
                      </div> */}
                      {/* <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                          <div className='w-100 mr-2'>
                            <h6>Pixel 2</h6>
                            <div className='progress' style={{ height: 6 }}>
                              <div
                                className='progress-bar bg-danger'
                                style={{ width: '40%' }}
                              />
                            </div>
                          </div>
                          <div className='ml-2 w-100'>
                            <h6>iPhone X</h6>
                            <div className='progress' style={{ height: 6 }}>
                              <div
                                className='progress-bar bg-primary'
                                style={{ width: '80%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}> */}
          {/* <StatsCard
            title={'Plywoods'}
            stat={totalPly}
            icon={<RiProductHuntLine size={"4rem"}/>}
          />
{
  user?.role==="super_admin"?<StatsCard 
  title={'Admins'}
  stat={admins?.length}
  icon={<RiAdminFill size={"4rem"}/>}
/>:null
} */}
          
          {/* <StatsCard 
            title={'Users'}
            stat={users?.length}
            icon={<FiUser size={"4rem"}/>}
          />
          <StatsCard 
            title={'Bulbs'}
            stat={bulbs?.length}
            icon={<BsFillLightbulbFill size={"4rem"}/>}
          />
          <StatsCard
            title={'Machines'}
            stat={machines?.length}
            icon={<BsFillLightbulbFill size={'3em'} />}
          /> */}
          {/* <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          /> */}
        {/* </SimpleGrid> */}
      {/* </Box> */}
      </div>
      </Box>
    );
  }
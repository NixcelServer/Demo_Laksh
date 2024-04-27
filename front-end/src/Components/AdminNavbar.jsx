import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { FiHome, FiSettings, FiMenu } from "react-icons/fi";
import { Link as RouterLink, useNavigate,useHistory } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { RiProductHuntLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { authLogout } from "../redux/auth/auth.action";


// import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LinkItems = [
  { name: "Home", icon: FiHome, toLink: "/adminDashboard" },
  // { name: "Admin", icon: GrUserAdmin, toLink: "/admin" },
  { name: "Categories", icon: GrUserAdmin, toLink: "/categories" },
  { name: "Keywords", icon: GrUserAdmin, toLink: "/keywords" },
  { name: "UOM", icon: RiProductHuntLine, toLink: "/UOM" },
  // { name: "Products", icon: RiProductHuntLine, toLink: "/addProduct" },
  // { name: "Users", icon: FiUsers, toLink: "/user" },
  // { name: "Settings", icon: FiSettings, toLink: "/settings" },
];
const user  =JSON.parse(sessionStorage.getItem('user'))






export default function AdminNavbar({ children }) {

  

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div>
    <UpperBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen}/>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
    </div>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate= useNavigate()
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "30%", lg: "18.2%" }}
      pos="fixed"
      h="full"
      marginTop="4rem"
      {...rest}
    >
      {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          
        {/* <Image src='/images/2.png' w='60px' objectFit={'cover'} onClick={()=>{navigate('/')}}  /> */}
        {/* </Text> */}
        {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex> */} 
      <div style={{ marginTop: '3rem' }}>
      {LinkItems.map((link) => (
        <RouterLink to={link.toLink}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </RouterLink>
      ))}

      </div>
      
    </Box>
  );
};

const UpperBarContent = ({ onClose, ...rest }) => {

  const dispatch = useDispatch()
    const navigate = useNavigate();
    
  
  //const history = useHistory();

  const handleLogout = () => {
    // Clear user session data
    sessionStorage.removeItem('user');
    dispatch(authLogout());
   navigate('/');
  };

    
    

   return(
   
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,  }}>
    <div  className='nav-header'>
          <div className='brand-logo'>
            <a href='/adminDashboard'style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <b style={{ marginTop: "0rem", textAlign: "center"}}className='logo-abbr'>
                <img src='/images/2.png' style={{ height: '40px', marginRight: '8px' }} alt='' />{' '}
              </b>
              <span className='logo-compact' style={{ fontSize: '1.5rem', fontWeight: 'bold', }}>
                {/* <img src='/images/logo-compact.png' alt='' /> */}
              </span>
              <span className='brand-title' > </span>
              <h3 style={{ marginLeft: '50px' }}>Laksh</h3>

              <span className='brand-title'>
              {/* <Image src='/images/2.png' w='60px' objectFit={'cover'}></Image> */}
              {/* <h4>Laksh</h4> */}
                {/* <img src='/images/2.png' alt='' /> */}
              </span>
            </a>
          </div>
        </div>  

        
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: '#fff' }}className='header'>
          <div className='header-content clearfix'>
            <div className='nav-control'>
              <div className='hamburger'>
                <span className='toggle-icon'>
                  <i className='icon-menu' />
                </span>
              </div>
            </div>
            <div className='header-left'>
              <div className='input-group icons'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text bg-transparent border-0 pr-2 pr-sm-3'
                    id='basic-addon1'
                  >
                    <i className='mdi mdi-magnify' />
                  </span>
                </div>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search Dashboard'
                  aria-label='Search Dashboard'
                />
                <div className='drop-down animated flipInX d-md-none'>
                  <form action='#'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search'
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className='header-right'>
              <ul className='clearfix'>
                <li className='icons dropdown'>
                  <a href='#' data-toggle='dropdown'>
                    <i className='mdi mdi-email-outline' />
                    <span className='badge badge-pill gradient-1'>3</span>
                  </a>
                  <div className='drop-down animated fadeIn dropdown-menu'>
                    <div className='dropdown-content-heading d-flex justify-content-between'>
                      <span className>3 New Messages</span>
                      <a href='#' className='d-inline-block'>
                        <span className='badge badge-pill gradient-1'>3</span>
                      </a>
                    </div>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li className='notification-unread'>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/1.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Saiful Islam
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className='notification-unread'>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/2.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Adam Smith
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Can you do me a favour?
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/3.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Barak Obama
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/4.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Hilari Clinton
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>Hello</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='icons dropdown'>
                  <a href='#' data-toggle='dropdown'>
                    <i className='mdi mdi-bell-outline' />
                    <span className='badge badge-pill gradient-2'>3</span>
                  </a>
                  <div className='drop-down animated fadeIn dropdown-menu dropdown-notfication'>
                    <div className='dropdown-content-heading d-flex justify-content-between'>
                      <span className>2 New Notifications</span>
                      <a href='#' className='d-inline-block'>
                        <span className='badge badge-pill gradient-2'>5</span>
                      </a>
                    </div>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-success-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Events near you
                              </h6>
                              <span className='notification-text'>
                                Within next 5 days
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-danger-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Event Started
                              </h6>
                              <span className='notification-text'>
                                One hour ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-success-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Event Ended Successfully
                              </h6>
                              <span className='notification-text'>
                                One hour ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-danger-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Events to Join
                              </h6>
                              <span className='notification-text'>
                                After two days
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Admin with Dropdown */}
                {/* <li className='icons dropdown d-none d-md-flex'>
                  <a href='#' className='log-user' data-toggle='dropdown'>
                    <span>Admin</span>{' '}
                    <i className='fa fa-angle-down f-s-14' aria-hidden='true' />
                  </a>
                  <div className='drop-down dropdown-language animated fadeIn  dropdown-menu'>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <a href='#'>Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
                <li className='icons dropdown'>
                  <div
                    className='user-img c-pointer position-relative'
                    data-toggle='dropdown'
                  >
                    <span className='activity active' />
                    <img
                      src='./theme/images/user.png'
                      height={40}
                      width={40}
                      alt
                    />
                  </div>
                  <div className='drop-down dropdown-profile animated fadeIn dropdown-menu'>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <Link to=''>
                            <i className='icon-user' /> <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to='/inbox'>
                            <i className='icon-envelope-open' />{' '}
                            <span>Inbox</span>{' '}
                            <div className='badge gradient-3 badge-pill gradient-1'>
                              3
                            </div>
                          </Link>
                        </li>
                        <hr className='my-2' />
                        {/* Uncomment this if you want to include Lock Screen */}
                        {/* <li>
          <Link to='/lock-screen'>
            <i className='icon-lock' /> <span>Lock Screen</span>
          </Link>
        </li> */}
                        <li>
                        <button onClick={handleLogout}>
                            <i className='icon-key' /> <span>Logout</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </nav>
  )
   
  }
  


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"))
  const navigate = useNavigate()
  return (
    <Flex
    // position={'fixed'}
    top="0rem"
    w={"100%"}
    zIndex={15}
    ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
      <Image src='/images/2.png' w='60px' objectFit={'cover'} onClick={()=>{navigate('/')}}  />
      </Text>

      
        
      {/* <Avatar name={`${user.username.firstname} ${user.username.lastname}`}/> */}
    </Flex>
  );
};

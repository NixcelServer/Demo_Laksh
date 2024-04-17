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
import { FiHome, FiSettings, FiMenu } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { RiProductHuntLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

// import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LinkItems = [
  { name: "Home", icon: FiHome, toLink: "/adminDashboard" },
  { name: "Admin", icon: GrUserAdmin, toLink: "/admin" },
  { name: "Categories", icon: GrUserAdmin, toLink: "/categories" },
  { name: "Keywords", icon: RiProductHuntLine, toLink: "/addProduct" },
  { name: "UOM", icon: RiProductHuntLine, toLink: "/addProduct" },
  { name: "Products", icon: RiProductHuntLine, toLink: "/addProduct" },
  { name: "Users", icon: FiUsers, toLink: "/user" },
  { name: "Settings", icon: FiSettings, toLink: "/settings" },
];
const user  =JSON.parse(sessionStorage.getItem('user'))




export default function AdminNavbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      {/* <UpperBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      /> */}
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
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate= useNavigate()
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "30%", lg: "20%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Image src='/images/2.png' w='60px' objectFit={'cover'} onClick={()=>{navigate('/')}}  />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <RouterLink to={link.toLink}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </RouterLink>
      ))}
    </Box>
  );
};

// const UpperBarContent = ({ onClose, ...rest }) => {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   // const handleMenu = (event) => {
//   //     setAnchorEl(event.currentTarget);
//   // };

//   // const handleClose = () => {
//   //     setAnchorEl(null);
//   // };

//   // const handleLogout = () => {
//   //     // Add logout logic here
//   //     handleClose();
//   // };

//   return (
//       <>
//           <AppBar position="static">
//               <Toolbar>
//                   <IconButton edge="start" color="inherit" aria-label="menu" onClick={onClose}>
//                       <MenuIcon />
//                   </IconButton>
//                   <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                       Home
//                   </Typography>
//                   <IconButton color="inherit" onClick={handleMenu}>
//                       <AccountCircleIcon />
//                   </IconButton>
//                   <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleClose}
//                   >
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                   </Menu>
//               </Toolbar>
//           </AppBar>
//           <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>Welcome to My App</Typography>
//       </>
//   );
// };

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
    position={'fixed'}
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

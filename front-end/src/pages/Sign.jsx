import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function Sign() {
  //const username = `${firstname} ${lastname}`;
  const [showPassword, setShowPassword] = useState(false);
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [u_name, setU_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const onsubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register', { // Adjust the endpoint URL accordingly
        u_name,
        email,
        password,
        age: 0,
        mobile,
        role: "user",
        address: {
          city: "",
          state: "",
          country: "",
          pin: 0,
        },
      });

      // Handle success response
      console.log(response.data);
      toast({
        title: 'Account Created Successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/'); // Redirect to home page after successful signup
    } catch (error) {
      // Handle error
      console.error('Error:', error.response.data);
      toast({
        title: error.response.data.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex
        minH={'100vh'}
        justify={'center'}
        backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/311/864/40/minimalism-blue-green-gradient-wallpaper-preview.jpg')"
        backgroundSize="cover"
      >
        <Stack spacing={3} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading pb='10px' color={'whiteAlpha.800'} fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'whiteAlpha.700'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              {/* <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                  </FormControl>
                </Box>
              </HStack> */}
              <FormControl id="u_name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="name" value={u_name} onChange={(e) => { setU_name(e.target.value) }}/>
                </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </FormControl>
              <FormControl id="con_password" isRequired>
                <FormLabel>Mobile No</FormLabel>
                <InputGroup>
                  <Input type={'text'} value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                </InputGroup>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={onsubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}>
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

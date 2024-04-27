import { Box, Flex, Text,Icon, HStack, Button, Stack,Input, FormControl,
    FormLabel  } from '@chakra-ui/react'

import React, { useState,useEffect } from "react";
import { GiToolbox ,GiMedicines,GiWoodBeam} from 'react-icons/gi'
import { FaLightbulb } from 'react-icons/fa'
import {  } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import AdvertisementSlider from "./Advertisement";

export default function HomeCatgory() {

    const navigate=useNavigate()

const handlePly=(el)=>{
    navigate(el)
}
const [productName, setProductName] = useState("");

const [postDate, setPostDate] = useState(new Date().toLocaleDateString());


const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the form data
    // For now, let's just log the product name
    console.log("Product Name:", productName);
  }

  return (
    <Box>
            <Flex justifyContent={'space-around'} p='10px' >
                <Stack as="Button"  direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={GiToolbox} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Machines</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={FaLightbulb} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Bulbs</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center'>
                    <Icon color={'blue.300'}  as={GiMedicines} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Medicines</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} onClick={()=>{handlePly('/plywood')}} alignItems='center' >
                    <Icon color={'blue.300'}  as={GiWoodBeam} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Plywoods</Text>
                </Stack>
                
            </Flex>

             {/* ---------------Submit Requirement--------------- */}

 <Box display="flex" flexDirection="row">
  <Box p={2} boxShadow="xl" borderWidth="1px" borderRadius="md" width="500px" height="250px" backgroundColor={"ButtonHighlight"} marginTop="50px" marginLeft={"120px"} marginBottom={"50px"} textAlign="center" marginRight={"20px"}>
    <form onSubmit={handleSubmit}>
      <FormControl id="productName" mb={10}>
        <FormLabel as="h2" boxShadow="md" fontFamily={"serif"} ml={"10px"} textAlign="center" fontWeight="bold" fontSize="xl" bg="gray.200" >Product Name</FormLabel>
        <Input
          type="text"
          textAlign="center"
          width="300px" 
          marginTop={"10px"}
          placeholder="Enter product name"
          value={productName}
          boxShadow="md"
          onChange={(e) => setProductName(e.target.value)}
        />
      </FormControl>
      <Box>
        <Text fontSize="sm" mb={2} color="gray.500">
          Posted On: {postDate}
        </Text>
      </Box>
      <Text fontSize="sm" mb={2} color="gray.600" fontWeight="bold" textDecoration="underline">
        We're here to help! Please share what you're looking for.
      </Text>
      <Button marginTop="0px" colorScheme="blue" type="submit">
        Submit Requirement
      </Button>
    </form>
  </Box>

  <Box p={2} boxShadow="xl" borderWidth="1px" borderRadius="md" width="500px" height="250px" backgroundColor={"ButtonHighlight"} marginTop="50px" marginLeft={"20px"} marginBottom={"50px"} textAlign="center">
    {/* Content for the second box */}
    <AdvertisementSlider />
  </Box>
</Box>






    {/* ----------------------------------------------------------------------------- */}

    </Box>
  )
}

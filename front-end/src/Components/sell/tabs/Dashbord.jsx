import React, { useState } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  ChakraProvider,
  theme,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export default function HorizontalWizardForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
        bg="gray.100"
      >
        <Box p={12} maxWidth="1200px" width="80%" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading fontSize="2xl">Company Registration Form</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                <Box bg="teal.200" p={2} borderRadius={8}>
                  <Heading as="h2" size="md" mb={2}>
                    Company Basic Details
                  </Heading>
                  {/* Your form fields */}
                </Box>
                <Flex justifyContent="space-between" mb={4} mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>Company Name</FormLabel>
                    <Input type="text" placeholder="Enter company name" />
                  </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>CIN Number</FormLabel>
                      <Input type="text" placeholder="Enter CIN number" />
                    </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>TAN Number</FormLabel>
                      <Input type="text" placeholder="Enter TAN number" />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>IEC</FormLabel>
                      <Input type="text" placeholder="Enter IEC" />
                    </FormControl>
                </Flex>  
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Annual Turnover</FormLabel>
                      <Input type="text" placeholder="Enter annual turnover" />
                    </FormControl>
                    <FormControl  width="48%">
                      <FormLabel>Number of Employees</FormLabel>
                      <Input type="text" placeholder="Enter number of employees" />
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="text" placeholder="Enter mobile number" />
                    </FormControl>
                   <FormControl  width="48%">
                    <FormLabel>Alternate Mobile Number</FormLabel>
                    <Input type="text" placeholder="Enter alternate mobile number" />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Landline Number</FormLabel>
                      <Input type="text" placeholder="Enter landline number" />
                    </FormControl>
                    <FormControl width="48%">
                      <FormLabel>Alternate Landline Number</FormLabel>
                      <Input type="text" placeholder="Enter alternate landline number" />
                    </FormControl>
                  </Flex>
                </>
              )}
              {step === 2 && (
                <>
                  <Box bg="teal.200" p={2} borderRadius={8}>
                  <Heading as="h2" size="md" mb={2}>
                    Company Address Details
                  </Heading>
                  </Box>
                  <Flex justifyContent="space-between" mb={4} mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>Pincode</FormLabel>
                    <Input type="text" placeholder="Enter pincode" />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>City</FormLabel>
                    <Input type="text" placeholder="Enter city" />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>State</FormLabel>
                    <Input type="text" placeholder="Enter state" />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>Country</FormLabel>
                    <Input type="text" placeholder="Enter country" />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>House No</FormLabel>
                    <Input type="text" placeholder="Enter house number" />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>Area</FormLabel>
                    <Input type="text" placeholder="Enter area" />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>Locality</FormLabel>
                    <Input type="text" placeholder="Enter locality" />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>Landmark</FormLabel>
                    <Input type="text" placeholder="Enter landmark" />
                  </FormControl>
                </Flex>
                </>
              )}
              {step === 3 && (
                <>
                <Box bg="teal.200" p={2} borderRadius={8}>
                  <Heading as="h2" size="md" mb={2}>
                      Financial Details
                  </Heading>
                  </Box>
                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Account Number</FormLabel>
                      <Input type="text" placeholder="Enter account number" />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>Account Name</FormLabel>
                      <Input type="text" placeholder="Enter account name" />
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>IFSC</FormLabel>
                      <Input type="text" placeholder="Enter IFSC" />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>Branch Name</FormLabel>
                      <Input type="text" placeholder="Enter branch name" />
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Bank Name</FormLabel>
                      <Input type="text" placeholder="Enter bank name" />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>GST Number</FormLabel>
                      <Input type="text" placeholder="Enter GST number" />
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>PAN Number</FormLabel>
                      <Input type="text" placeholder="Enter PAN number" />
                    </FormControl>
                  </Flex>
                </>
              )}
              {step === 4 && (
                <>
                  <Box bg="teal.200" p={2} borderRadius={8}>
                  <Heading as="h2" size="md" mb={2}>
                    Company Social Platforms
                  </Heading>
                  </Box>
                  <FormControl  width="48%" mb={4} mt={4}>
                    <FormLabel>Website URL</FormLabel>
                    <Input type="text" placeholder="Enter website URL" />
                  </FormControl>
                  <FormControl  width="48%" mb={4}>
                    <FormLabel>Instagram URL</FormLabel>
                    <Input type="text" placeholder="Enter Instagram URL" />
                  </FormControl>
                  <FormControl  width="48%" mb={4}>
                    <FormLabel>Facebook URL</FormLabel>
                    <Input type="text" placeholder="Enter Facebook URL" />
                  </FormControl>
                </>
              )}
              {/* <Flex> */}
                {step > 1 && (
                   //<Flex justifyContent="flex-end">
                   <Button
                    width=""
                    mt={4}
                    float="left"
                    mr={4}
                    onClick={prevStep}
                    colorScheme="teal">
                    Previous
                  </Button>
 
                 //</Flex>
                
                )}
                {step < 4 ? (
                  //<Flex justifyContent="flex-end">
                  <Button width="" mt={4} float="right" mr={4} onClick={nextStep} colorScheme="teal">
                    Next
                  </Button>
                //</Flex>
                ) : (
                  //<Flex justifyContent="flex-end">
                    <Button width="" mt={4} float="right" mr={4}  type="submit" colorScheme="teal">
                      Register
                    </Button>
                  //</Flex>
                )}
              {/* </Flex> */}
            </form>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

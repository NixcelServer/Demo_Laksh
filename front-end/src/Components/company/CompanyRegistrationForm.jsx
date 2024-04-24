import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  ChakraProvider,
  theme,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'; // Import useToast from Chakra UI
import { useNavigate } from 'react-router-dom';

export default function CompanyRegistrationForm() {
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    // Check if all required fields are filled for the current step
  const requiredFields = getRequiredFieldsForStep(step); // Define this function to get required fields based on the current step
  const missingFields = requiredFields.filter(field => !formData[field]);
  
  // If there are missing required fields, show a toast message and prevent advancing
  if (missingFields.length > 0) {
    toast({
      title: 'Error',
      description: `Please fill in all required fields: ${missingFields.join(', ')}`,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  } else {
    // All required fields are filled, proceed to the next step
    if (step === 3) {
      // If on the third step, move to the fourth step
      setStep(step + 1);
    } else {
      // Otherwise, proceed to the next step
      setStep(step + 1);
    }
    
  }
  };

  const getRequiredFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ['name', 'cinNo', 'tanNo', 'iec'];
      case 2:
        return ['pincode', 'city', 'state', 'country', 'area', 'locality'];
      case 3:
        return ['accountNo', 'accountName', 'ifsc', 'branchName', 'bankName', 'gstNo', 'panNo'];
      case 4:
        return ['websiteUrl']; // No required fields for step 4
      default:
        return [];
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const annualTurnoverOptions = [
    { label: '0 to 5 lakh', value: '0-5' },
    { label: '5 lakh to 10 lakh', value: '5-10' },
    { label: '10 lakh to 15 lakh', value: '10-15' },
    // Add more options as needed
  ];
  
  const numberOfEmployeesOptions = [
    { label: '0-50', value: '0-50' },
    { label: '51-100', value: '51-100' },
    { label: '101-500', value: '101-500' },
    { label: '501-1000', value: '501-1000' },
    // Add more options as needed
  ];
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userString = sessionStorage.getItem('user');
      const user = JSON.parse(userString);
      const encUserId = user.encUserId;

    // Add encUserId to the form data
    const formDataWithEncUserId = { ...formData, encUserId };

    // Log the formData before sending the request
    console.log('formData:', formDataWithEncUserId);

    
  
      // Send the POST request to the backend API
      const response = await axios.post('http://localhost:8000/api/registeryourcompany', formDataWithEncUserId);
    
      // Log the response data
      console.log('Response:', response.data);
  
      // Display success toast
      toast({
        title: 'Account Created Successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
  
      // Redirect to home page after successful registration
      navigate('/');
    } catch (error) {
      console.error(error);
      // Handle error
      if (error.response) {
        // Server responded with a non-2xx status code
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
      }
    }
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
          <form onSubmit={onSubmit}>
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
                    <Input type="text"
                        placeholder="Enter company name"
                        name="name" // Add name attribute
                        value={formData.name} // Bind value to state
                        onChange={handleChange} />
                  </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>CIN Number</FormLabel>
                      <Input type="text" placeholder="Enter CIN number"
                      name="cinNo" // Add name attribute
                      value={formData.cinNo} // Bind value to state
                      onChange={handleChange} /> 
                    </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>TAN Number</FormLabel>
                      <Input type="text" placeholder="Enter TAN number"
                      name="tanNo" // Add name attribute
                      value={formData.tanNo} // Bind value to state
                      onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>IEC</FormLabel>
                      <Input type="text" placeholder="Enter IEC" 
                       name="iec" // Add name attribute
                       value={formData.iec} // Bind value to state
                       onChange={handleChange}/>
                    </FormControl>
                </Flex>  
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Annual Turnover</FormLabel>
                      <Select type="text" placeholder="Enter annual turnover"
                       name="annualTurnover" // Add name attribute
                       value={formData.annualTurnover} // Bind value to state
                       onChange={handleChange}>
                        {annualTurnoverOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                       </Select>
                    </FormControl>
                    <FormControl  width="48%">
                      <FormLabel>Number of Employees</FormLabel>
                      <Select type="text" placeholder="Enter number of employees"
                      name="noOfEmps" // Add name attribute
                      value={formData.noOfEmps} // Bind value to state
                      onChange={handleChange}>
                        {numberOfEmployeesOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Select>
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="space-between" mb={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="text" placeholder="Enter mobile number"
                       name="mobileNo" // Add name attribute
                       value={formData.mobileNo} // Bind value to state
                       onChange={handleChange} />
                    </FormControl>
                   <FormControl  width="48%">
                    <FormLabel>Alternate Mobile Number</FormLabel>
                    <Input type="text" placeholder="Enter alternate mobile number"
                    name="altMobileNo" // Add name attribute
                    value={formData.altMobileNo} // Bind value to state
                    onChange={handleChange}  />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mb={4}>
                    <FormControl width="48%">
                      <FormLabel>Landline Number</FormLabel>
                      <Input type="text" placeholder="Enter landline number"
                      name="landlineNo" // Add name attribute
                      value={formData.landlineNo} 
                      onChange={handleChange}/>
                    </FormControl>
                    <FormControl width="48%">
                      <FormLabel>Alternate Landline Number</FormLabel>
                      <Input type="text" placeholder="Enter alternate landline number"
                      name="altLandlineNumber" // Add name attribute
                      value={formData.altLandlineNumber}  // Bind value to state 
                      onChange={handleChange}/> 
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
                    <Input
                      type="text" // Changed type to "text" for pincode
                      placeholder="Enter pincode"
                      name="pincode" // Add name attribute
                      value={formData.pincode} // Bind value to state
                      onChange={handleChange} // Handle value change
                    />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter city"
                      name="city" // Add name attribute
                      value={formData.city} // Bind value to state
                      onChange={handleChange} // Handle value change
                    />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between" mt={4}>
                <FormControl isRequired width="48%">
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter state"
                    name="state" // Add name attribute
                    value={formData.state} // Bind value to state
                    onChange={handleChange} // Handle value change
                  />
                </FormControl>
                <FormControl isRequired width="48%">
                  <FormLabel>Country</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter country"
                    name="country" // Add name attribute
                    value={formData.country} // Bind value to state
                    onChange={handleChange} // Handle value change
                  />
                  </FormControl>
                 </Flex>
                 <Flex justifyContent="space-between" mt={4}>
                    <FormControl  width="48%">
                      <FormLabel> House No./Block No.</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter sector number"
                        name="houseNo" // Add name attribute
                        value={formData.houseNo} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>Area</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter area"
                        name="area" // Add name attribute
                        value={formData.area} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                  </Flex>
                 <Flex justifyContent="space-between" mt={4}>
                  <FormControl isRequired width="48%">
                    <FormLabel>Locality</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter locality"
                      name="locality" // Add name attribute
                      value={formData.locality} // Bind value to state
                      onChange={handleChange} // Handle value change
                    />
                  </FormControl>
                  <FormControl isRequired width="48%">
                    <FormLabel>Landmark</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter landmark"
                      name="landmark" // Add name attribute
                      value={formData.landmark} // Bind value to state
                      onChange={handleChange} // Handle value change
                    />
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
                      <Input
                        type="text"
                        placeholder="Enter account number"
                        name="accountNo" // Add name attribute
                        value={formData.accountNo} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>Account Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter account name"
                        name="accountName" // Add name attribute
                        value={formData.accountName} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                  </Flex>

                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>IFSC</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter IFSC"
                        name="ifsc" // Add name attribute
                        value={formData.ifsc} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>Branch Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter branch name"
                        name="branchName" // Add name attribute
                        value={formData.branchName} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                  </Flex>

                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>Bank Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter bank name"
                        name="bankName" // Add name attribute
                        value={formData.bankName} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl isRequired width="48%">
                      <FormLabel>GST Number</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter GST number"
                        name="gstNo" // Add name attribute
                        value={formData.gstNo} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                  </Flex>

                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl isRequired width="48%">
                      <FormLabel>PAN Number</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter PAN number"
                        name="panNo" // Add name attribute
                        value={formData.panNo} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
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
                  <FormControl isRequired width="48%" mb={4} mt={4}>
                      <FormLabel>Website URL</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter website URL"
                        name="websiteUrl" // Add name attribute
                        value={formData.websiteUrl} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl width="48%" mb={4}>
                      <FormLabel>Instagram URL</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter Instagram URL"
                        name="instagramUrl" // Add name attribute
                        value={formData.instagramUrl} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
                    </FormControl>
                    <FormControl width="48%" mb={4}>
                      <FormLabel>Facebook URL</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter Facebook URL"
                        name="facebookUrl" // Add name attribute
                        value={formData.facebookUrl} // Bind value to state
                        onChange={handleChange} // Handle value change
                      />
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
                    <Button  width="" mt={4} float="right" mr={4}  type="submit" colorScheme="teal">
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


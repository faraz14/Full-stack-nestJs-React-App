import { Box, Button, Heading, Text, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ApplicationPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/signin"); // Redirect to Sign In
  };

  return (
    <Container centerContent minH="100vh" display="flex" justifyContent="center">
      <Box 
        p={8} 
        borderWidth={1} 
        borderRadius="lg" 
        boxShadow="lg" 
        textAlign="center"
        maxW="400px"
      >
        <Heading size="lg" color="blue.600">Welcome to the Application</Heading>
        <Text mt={4} fontSize="md" color="gray.600">
          You are successfully signed in!
        </Text>
        <Button 
          colorScheme="red" 
          mt={6} 
          onClick={handleLogout}
          size="lg"
          width="full"
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default ApplicationPage;

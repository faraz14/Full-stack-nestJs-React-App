import { Box, Heading, VStack, Input, Button, FormControl, FormLabel, Text, Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../helpers/validation";


type SignUpPageContext = {
    email: string,
    name: string,
    password: string,
    error?: string,
}

const auth_service_base_url = import.meta.env.VITE_AUTH_APP_API;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const SignUpPage:React.FC = () => {

    const [context, setContext] = useState<SignUpPageContext>({
        email: '',
        name: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const {email, name, password} = context;
        const normalizedEmail = email.trim().toLowerCase();
        setContext(prev => ({...prev, error: ''}));
        if (!email || !name || !password) {
            setContext(prev => ({...prev, error: "All fields are required."}));
            return;
        }

        if(!isValidEmail(normalizedEmail)){
            setContext(prev => ({...prev, error: "Please enter a valid email address."}));
        }
    
        if (!passwordRegex.test(password)) {
          setContext(prev => ({...prev, error: "Password must be at least 8 characters, contain a letter, a number, and a special character."}));
          return;
        }
    
        try {
          const response = await axios.post(`${auth_service_base_url}/auth/signup`, { email: normalizedEmail, name, password });
          if (response.status === 201) {
            navigate("/signin");
          }
        } catch (err) {
          setContext(prev => ({...prev, error: "Sign-up failed. Try again."}));
        }
      };

return (
 <Container centerContent minH="100vh" display="flex" justifyContent="flex-start" pt={10}>
<Box p={6} maxW="400px" mx="auto" mt={10} borderWidth={1} borderRadius="md" boxShadow="md">
    <Heading size="lg" mb={4}>Sign Up</Heading>
    {context.error && <Text color="red.500">{context.error}</Text>}
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={context.email} onChange={(e) => setContext(prev => ({...prev, email: e.target.value}))} />
      </FormControl>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={context.name} onChange={(e) => setContext(prev => ({...prev, name: e.target.value}))} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={context.password} onChange={(e) => setContext(prev => ({...prev, password: e.target.value}))}/>
        <Text fontSize="sm" color="gray.500" mt={1} textAlign="left">
        Password must be at least 8 characters, contain a letter, a number, and a special character.
      </Text>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSignUp}>Sign Up</Button>
      <Text>Already have an account? <Link to="/signin" style={{ color: "blue" }}>Sign In</Link></Text>
    </VStack>
  </Box>
  </Container>
);
}
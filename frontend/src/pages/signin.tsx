import { useState } from "react";
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, Text, Container } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isValidEmail } from "../helpers/validation";

const auth_service_base_url = import.meta.env.VITE_AUTH_APP_API;

type SignInPageContext = {
    email: string,
    password: string,
    error: string,
}

export const SignInPage = () => {

    const [context, setContext] = useState<SignInPageContext>({
        email: "",
        password: "",
        error: ""
    })
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const {email, password} = context;
        const normalizedEmail = email.trim().toLowerCase();
        setContext(prev => ({ ...prev, error: '' }));
        if (!email || !password) {
            setContext(prev => ({ ...prev, error: "Both fields are required." }));
            return;
        }
        
        if(!isValidEmail(normalizedEmail)){
            setContext(prev => ({ ...prev, error: "Please enter a valid email address" }));
            return;
        }
        
        try {
            const response = await axios.post(`${auth_service_base_url}/auth/signin`, { email: normalizedEmail, password });
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/");
            }
        } catch (err) {
            setContext(prev => ({ ...prev, error: "Invalid credentials, or user does not exisit for this email" }));
        }
    };

    return (
        <Container centerContent minH="100vh" display="flex" justifyContent="flex-start" pt={10}>
        <Box p={6} maxW="400px" mx="auto" mt={10} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>Sign In</Heading>
        {context.error && <Text css={{maxWidth: '200px'}} color="red.500" mb={4}>{context.error}</Text>}
        <VStack spacing={4}>
            <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={context.email} onChange={(e) =>  setContext(prev => ({ ...prev, email: e.target.value }))} />
            </FormControl>
            <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={context.password} onChange={(e) => setContext(prev => ({ ...prev, password: e.target.value }))} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSignIn}>Sign In</Button>
            <Text>Don't have an account? <Link to="/signup" style={{ color: "blue" }}>Sign Up</Link></Text>
        </VStack>
        </Box>
        </Container>
    );
};

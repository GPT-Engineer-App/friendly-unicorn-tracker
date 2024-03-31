import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, useToast, VStack, Heading, Text } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    // Dummy login function, replace with actual API call
    try {
      const response = await fakeApiCall("/login", "POST", { email, password });
      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Logged in successfully!",
          description: `Access token received: ${data.accessToken}`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // This is a placeholder, replace with actual API call
  const fakeApiCall = (url, method, body) => {
    console.log(`Making ${method} request to ${url} with body:`, body);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: () => Promise.resolve({ accessToken: "fake_access_token" }),
        });
      }, 1000);
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={8} py={12}>
        <Heading>Welcome to Interactive App</Heading>
        <Box w="100%" p={8} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </FormControl>
            <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </Box>
        <Text>
          Don't have an account?{" "}
          <Button variant="link" colorScheme="blue">
            Sign Up
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;

import React from 'react';
import { Flex, Stack, Box, Heading, useColorMode } from '@chakra-ui/react';
import LoginForm from './LoginForm';

function LoginFormPage() {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const formColor = { light: 'white', dark: 'gray.500' };
  // const col = {light:"white", dark: "gray.800"};

  return (
    <Flex
      // minHeight="100vh"
      align="center"
      justify="center"
      bg={bgColor[colorMode]}
      rounded="lg"
    >
      <Stack spacing={8} mx="auto" width="full" maxW="md" py={12} px={6}>
        <Heading fontSize="3xl" textAlign="center">
          Sign up
        </Heading>
        <Box
          rounded="lg"
          // bg="white"
          bg={formColor[colorMode]}
          boxShadow="lg"
          p={{ base: 4, md: 8 }}
        >
          <LoginForm />
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginFormPage;

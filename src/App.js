import React, { useState } from 'react';
import { ChakraProvider, 
  // Box, 
  // VStack, 
  // Grid,
   theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LoginFormPage } from './components/LoginForm';
import { ChatPanel } from './components/ChatPanel';
import { Provider as AuthProvider } from './AuthContext';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [nickname, setNickname] = useState('');
  return (
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl"> */}
        {/* <Grid minH="100vh" p={3}> */}
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          {/* <VStack spacing={8}> */}
            <AuthProvider
              value={{ authenticated, setAuthenticated, nickname, setNickname }}
            >
              {authenticated ? <ChatPanel /> : <LoginFormPage />}
            </AuthProvider>
          {/* </VStack> */}
        {/* </Grid> */}
      {/* </Box> */}
    </ChakraProvider>
  );
}

export default App;

import React, { useContext } from 'react';
import {
  Flex,
  Stack,
  Box,
  Text,
  Link,
  Divider,
  useColorMode,
} from '@chakra-ui/react';

import AuthContext from '../../AuthContext';
import Channel from './Channel';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function ChatPanel() {
  const { setAuthenticated, nickname } = useContext(AuthContext);
  const handleLogout = () => setAuthenticated(false);
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const formColor = { light: 'white', dark: 'gray.500' };
  const strongColor = { color: '#e768a2' };

  return (
    <Flex
      bg={bgColor[colorMode]}
      // minHeight="100vh"
      align="flex-start"
      justify="center"
      // bg="gray.200"
      rounded="lg"
    >
      <Stack spacing={6} mx="auto" width="full" py={8} px={8}>
        <Box
          bg={formColor[colorMode]}
          rounded="lg"
          // bg="white"
          boxShadow="lg"
          p={4}
        >
          <Text textAlign="right">
            Hello <strong style={strongColor}>{nickname} </strong>
            {' | '}
            <Link onClick={handleLogout}>Log out</Link>
          </Text>

          <Divider />
          <Channel />
        </Box>
      </Stack>
    </Flex>
  );
}

export default ChatPanel;

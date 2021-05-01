import React, { useContext } from 'react';
import { Flex, Stack, Box, Text, Link, Divider } from '@chakra-ui/react';

import AuthContext from '../../AuthContext';
import Channel from './Channel';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function ChatPanel() {
  const { setAuthenticated, nickname } = useContext(AuthContext);
  const handleLogout = () => setAuthenticated(false);

  return (
    <Flex 
    // minHeight="100vh"
     align="flex-start" justify="center" bg="gray.200" rounded="lg">
      <Stack spacing={6} mx="auto" width="full" py={8} px={8}>
        <Box rounded="lg" bg="white" boxShadow="lg" p={4}>
          <Text textAlign="right">
            Hello <strong>{nickname}</strong>
            {' | '}
            <Link onClick={handleLogout}>Log out</Link>
          </Text>
          {/* <ColorModeSwitcher /> */}
          <Divider />
          <Channel />
        </Box>
      </Stack>
    </Flex>
  );
}

export default ChatPanel;

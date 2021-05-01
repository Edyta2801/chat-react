import React from "react";
import { Box, Text, Divider, useColorMode } from "@chakra-ui/react";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);
//   return datetime.toLocaleDateString();
  return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

function Message({ message }) {
  const { colorMode } = useColorMode();
  // const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const formColor = { light: 'white', dark: 'gray.300' };

  return (
    <Box rounded="lg" 
    bg="white"
    bg={formColor[colorMode]}
    
    
     boxShadow="lg" p={4}>
      <Text py={2}
      color="grey" 
      fontWeight='bold'
      // bg={bgColor[colorMode]}
      
      fontSize='sm'>
        {message.user} {convertDate(message.datetime)}
      </Text>
      <Divider />
      <Text 

      color="black" 
      py={2} fontSize='lg'>{message.content}</Text>
    </Box>
  );
}

export default Message;
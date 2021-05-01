import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);
//   return datetime.toLocaleDateString();
  return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

function Message({ message }) {
  return (
    <Box rounded="lg" bg="white" boxShadow="lg" p={4}>
      <Text py={2} color="grey" fontSize='md'>
        {message.user} {convertDate(message.datetime)}
      </Text>
      <Divider />
      <Text py={2} fontSize='lg'>{message.content}</Text>
    </Box>
  );
}

export default Message;
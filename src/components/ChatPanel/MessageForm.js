import React, { useState, useContext } from "react";
import { HStack, Input, Button, useColorMode } from "@chakra-ui/react";

import AuthContext from "../../AuthContext";
import db from "../../config";

function MessageForm() {
  const { nickname } = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState("");

  const handleContentChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: nickname,
      content: newMessage,
      datetime: Date.now()
    };
    if (newMessage) {
      db.ref("/messages")
        .push(messageObj)
        .then(() => {
          setNewMessage("");
          // window.scrollTo(0, document.body.scrollHeight);
        })
        .catch((error) => console.error(error));
    }
  };

  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.600' };
  const formColor = { light: 'white', dark: 'gray.500' };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
        // variant="filled" 
        placeholder="Filled" 
          type="text"
          name="content"
          value={newMessage}
          onChange={handleContentChange}
          bg={bgColor[colorMode]}
        />
        <Button type="submit" colorScheme="blue">
          Send
        </Button>
      </HStack>
    </form>
  );
}

export default MessageForm;

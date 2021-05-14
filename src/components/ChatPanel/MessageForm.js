import React, { useState, useContext } from 'react';
import { HStack, Input, Button, useColorMode } from '@chakra-ui/react';

import AuthContext from '../../AuthContext';
import db from '../../config';
const messageAudio = new Audio('./sounds/message.mp3');

function MessageForm() {
  const { nickname } = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState('');
  const [messageSound, setMessageSound] = useState('');

  const handleContentChange = event => {
    setNewMessage(event.target.value);
    setMessageSound(true);
  };
  // const handleSoundButton = () => {
  //   setMessageSound(prev => prev = !prev)
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const messageObj = {
      user: nickname,
      content: newMessage,
      soundPlay: messageAudio.play(),
      sound: messageSound,
      datetime: Date.now(),
    };
    if (newMessage) {
      db.ref('/messages')
        .push(messageObj)
        .then(() => {
          setNewMessage('');
          setMessageSound('');
          // window.scrollTo(0, document.body.scrollHeight);
        })
        .catch(error => console.error(error));
    }
  };

  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.600' };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder="Filled"
          type="text"
          name="content"
          value={newMessage}
          onChange={handleContentChange}
          // messageSound={handleSoundButton}
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

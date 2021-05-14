import React, { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';

import Message from './Message';
import MessageForm from './MessageForm';
import db from '../../config';

// const messageAudio = new Audio('../../../public/sounds/message.mp3');

function Channel() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    db.ref('/messages').on('value', snapshot => {
      const fbMessages = snapshot.val();
      console.log(fbMessages);
      const convertedMessages = Object.entries(fbMessages || {}).map(
        ([id, message]) => ({
          ...message,
          id,
        })
      );

      convertedMessages.reverse();
      console.log(convertedMessages);
      setMessage(convertedMessages);
      // window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  return (
    <Stack spacing={8} py={6}>
      <MessageForm />
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </Stack>
  );
}

export default Channel;

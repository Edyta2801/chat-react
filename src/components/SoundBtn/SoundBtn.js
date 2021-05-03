import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';

import VolumeOn from '../../icons/VolumeOn';
import VolumeOff from '../../icons/VolumeOff';

function SoundBtn() {
  const [messageSound, setMessageSound] = useState([]);

  function volumeIcon() {
    if (messageSound) {
      return <VolumeOn />;
    }
    return <VolumeOff />;
  }
  const handleSoundButton = () => {
    setMessageSound(prev => (prev = !prev));
  };

  //   const { colorMode } = useColorMode();
  //   const bgColor = { light: 'gray.200', dark: 'gray.700' };
  //   const formColor = { light: 'blackAlpha', dark: 'whiteAlpha' };

  return (
    <IconButton
      className="Messenger__sound-button"
        onClick={handleSoundButton}
      label="Włącz/Wyłącz dźwięk wiadomości"
      title="Włącz lub Wyłącz dźwięk wiadomości"
      size="sm"
      variant="unstyled"
      isRound
      //   colorScheme={formColor[colorMode]}
      icon={volumeIcon()}
    >
      handleSoundButton={handleSoundButton}
       messageSound={messageSound}
      {/* {volumeIcon()} */}
    </IconButton>
  );
}

export default SoundBtn;

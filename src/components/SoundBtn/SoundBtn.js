import React from 'react';
import { IconButton } from '@chakra-ui/react';

import VolumeOn from '../../icons/VolumeOn';
import VolumeOff from '../../icons/VolumeOff';

function SoundBtn({ handleSoundButton, messageSound }) {
  function volumeIcon() {
    if (!messageSound) {
      return <VolumeOn />;
    }
    return <VolumeOff />;
  }
  // const handleSoundButton = () => {
  //   setMessageSound(prev => (prev = !prev));
  //   console.log('clicked volume')
  // };

  return (
    //   <button
    //   className="Messenger__sound-button"
    //   onClick={handleSoundButton}
    //   label="Włącz/Wyłącz dźwięk wiadomości"
    //   title="Włącz lub Wyłącz dźwięk wiadomości"
    // >
    //   {volumeIcon()}
    // </button>

    <IconButton
      className="Messenger__sound-button"
      // onClick={() => handleSoundButton}
      onClick={handleSoundButton}
      label="Włącz/Wyłącz dźwięk wiadomości"
      title="Włącz lub Wyłącz dźwięk wiadomości"
      size="sm"
      variant="unstyled"
      isRound
      // icon={volumeIcon()}
    >
    <VolumeOn />
      {/* {volumeIcon()} */}
    </IconButton>
  );
}

export default SoundBtn;

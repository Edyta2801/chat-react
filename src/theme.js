// theme.js

// 1. import `extendTheme` function
import {extendTheme} from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: props => ({
    'html, body,': {
      // fontSize: 'lg',
      color: props.colorMode === 'dark' ? 'white':'dark',
      lineHeight: 'tall',
      fonts: {
        heading: "Open Sans",
        body: "Raleway",
      },
    },
    'a, input, label': {
      color: props.colorMode === 'dark' ? 'white' : 'dark',
    },

    //  svg: {
    //   fill: props.colorMode === 'dark' ? 'white' : 'teal.500',
    // }
  }),
};

// 3. extend the theme
const theme = extendTheme({config, styles});

export default theme;
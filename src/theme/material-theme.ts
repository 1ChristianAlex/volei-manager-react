import { createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#395597',
    },
    secondary: {
      main: '#399753',
    },
    text: {
      primary: '#1A2747',
      secondary: '#7A7A7A',
    },
    error: {
      main: '#973939',
    },
  },
  typography: {
    fontFamily: 'Archivo',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: '1px solid #1A2747',
          color: '#1A2747',
        },
      },
    },
  },
});

export { materialTheme };

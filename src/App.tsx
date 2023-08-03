import { RouterProvider } from 'react-router-dom';
import { router } from './routes/BrowserRoutes.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { materialTheme } from './theme/material-theme.ts';

import './theme/fonts.css';

function App() {
  return (
    <ThemeProvider theme={materialTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

import Catalog from '../../features/catalog/Catalog';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import Container from '@mui/material/Container';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

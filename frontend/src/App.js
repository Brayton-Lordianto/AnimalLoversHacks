import './App.css';
import BaseLayout from './screens/BaseLayout';
import Home from './screens/Home';
import AdopterRegistration from './screens/AdopterRegistration';
import Login from './screens/Login';
import AnimalRegistration from './screens/AnimalRegistration';
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Animals from './screens/Animals';
const primaryTheme = createTheme({
  palette: {
    primary: {
      main: '#22C55E',
    },
    secondary: {
      main: '#0DFFBE',
    },
    warning: {
      main: '#FF0D11',
    },
    blackv2: {
      main: '#262020',
      light1: '#5C5858',
      light2: '#939090',
      light3: '#C9C7C7',
      light4: '#E9E9E9',
      light5: '#F4F4F4',
    },
    appbarColor: {
      main: '#F4F4F4',
    },
    gradient: {
      main: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  },
});

function App() {
  return (
    < >
      <ThemeProvider theme={primaryTheme}>
        <BaseLayout>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="login" element={< Login />} />
            <Route path="register-animal" element={< AnimalRegistration />} />
            <Route path="adopt" element={< AdopterRegistration />} />
            <Route path="animals" element={< Animals />} />
          </Routes>
          {/* <Home />
        <MainPage />
        <Login />
        <AdopterRegistration />
      <AnimalRegistration /> */}
        </BaseLayout>
      </ThemeProvider>
    </>
  )
}

export default App;

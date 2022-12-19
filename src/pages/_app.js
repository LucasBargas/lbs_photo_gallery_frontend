import { Roboto } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import AppArea from '../layouts/AppArea';
import Header from '../layouts/Header';
import Globals from '../styles/Globals';
import Theme from '../styles/Theme';
import FlashMessages from '../layouts/FlashMessages';

const roboto = Roboto({
  weight: '400',
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <AppArea className={roboto.className}>
          <Header />
          <main>
            <FlashMessages />
            <Component {...pageProps} />
          </main>
          <Globals />
        </AppArea>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;

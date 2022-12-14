import { Roboto } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import AppArea from '../layouts/AppArea';
import Globals from '../styles/Globals';
import Theme from '../styles/Theme';

const roboto = Roboto({
  weight: '400',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <AppArea className={roboto.className}>
        <main>
          <Component {...pageProps} />
        </main>
        <Globals />
      </AppArea>
    </ThemeProvider>
  );
}

export default MyApp;

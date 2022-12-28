import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import AppArea from '../layouts/AppArea';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Globals from '../styles/Globals';
import Theme from '../styles/Theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <AppArea>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
          <Globals />
        </AppArea>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MyApp;

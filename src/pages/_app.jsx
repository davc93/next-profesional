import '../styles/globals.css';
import { ProviderAuth } from 'hooks/useAuth';
import MainLayout from '../layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderAuth>
  );
}

export default MyApp;

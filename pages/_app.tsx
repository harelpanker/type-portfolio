import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/share/Layout';
// import '@splidejs/react-splide/css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

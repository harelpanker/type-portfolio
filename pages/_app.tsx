import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '@splidejs/react-splide/css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

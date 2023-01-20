import type { AppProps } from 'next/app';
import '../styles/globals.css';
import localFont from '@next/font/local';
import Layout from '../components/share/Layout';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

const jakarta = localFont({
  src: '../public/fonts/jakarta.ttf',
  variable: '--font-jakarta',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google analytics - start */}
      <Script
        id='gtm'
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload' id='analytics'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      {/* Google analytics - end */}
      <div className={`${jakarta.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </div>
    </>
  );
}

export default MyApp;

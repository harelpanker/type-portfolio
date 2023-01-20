import type { AppProps } from 'next/app';
import '../styles/globals.css';
import localFont from '@next/font/local';
import Layout from '../components/share/Layout';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

const myFont = localFont({ src: './jakarta.ttf' });
const jakarta = localFont({
  src: './jakarta.ttf',
  variable: '--font-jakarta',
});

//console.log('jakarta', jakarta);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W8D8DVL');
        `}
      </Script>
      {/* ${jakarta.className} ${jakarta.style} className={`${jakarta.variable} font-sans`} */}
      <div className={`${myFont.className} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </div>
    </>
  );
}

export default MyApp;

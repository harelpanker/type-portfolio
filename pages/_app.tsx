import type { AppProps } from 'next/app';
import '../styles/globals.css';
// import localFont from '@next/font/local';
import Layout from '../components/share/Layout';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

// const jakarta = localFont({
//   src: '../public/fonts/jakarta.ttf',
//   variable: '--font-jakarta',
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google analytics - start */}
      {/* <Script
        id='gtm'
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      /> */}

      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W8D8DVL');
        `}
      </Script>
      {/* Google analytics - end */}
      {/* <div className={`${jakarta.variable} font-sans`}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      {/* </div> */}
    </>
  );
}

export default MyApp;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <meta charSet='UTF-8' />
        {/* twitter - start */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='/og.png' />

        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Panker.io' />
        <meta property='og:url' content='https://panker.io/' />
        <meta
          property='og:site_name'
          content='Harel Panker | Front-End Web Developer'
        />
        <meta property='og:image' content='/og.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel='icon' href='/favicon.png' />

        {/* fonts */}
        <link
          href='https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@1,2&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='antialiased box-border m-0 p-0 bg-slate-50 text-slate-900 font-jakarta'>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-W8D8DVL'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

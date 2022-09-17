import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <meta
          property='og:title'
          content='Harel Panker | Front End Web Developer'
        />
        <meta
          name='description'
          content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
        />
        <meta property='og:url' content='https://panker.io/' />
        <meta
          property='og:site_name'
          content='Harel Panker | Front End Web Developer'
        />
        <meta property='og:image' content='/open-grhpe.png' />
        <meta property='og:image:width' content='300' />
        <meta property='og:image:height' content='300' />
        <link rel='icon' href='/favicon.png' />
        {/* fonts */}
        <link
          href='https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@1,2&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='antialiased box-border m-0 p-0 bg-slate-50 text-slate-900 font-jakarta'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

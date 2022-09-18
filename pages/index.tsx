import Head from 'next/head';
import Hero from '../components/home/Hero';
import Recommendations from '../components/home/Recommendations';
import Work from '../components/home/Work';
import CTA from '../components/share/CTA';
import LogosSlide from '../components/share/LogosSlide';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harel Panker | Front End Web Developer</title>
        <meta
          name='description'
          content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
        />
        <meta
          name='twitter:title'
          content='Harel Panker | Front End Web Developer'
        />
        <meta
          name='twitter:description'
          content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
        />
      </Head>
      <main>
        <Hero />
        <LogosSlide />
        <Work />
        <Recommendations />
        <CTA />
      </main>
    </>
  );
}

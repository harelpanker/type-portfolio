import Head from 'next/head';
import CTA from '../components/about/CTA';
import CVButton from '../components/about/CVButton';
import Hero from '../components/about/Hero';
import Main from '../components/about/Main';

// https://foliospec-extended.webflow.io/about-v1-default-light-theme
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | About</title>
        <meta
          name='description'
          content="Nice to meet you! I'm frontend engineer with 3+ years of experience."
        />
        <meta name='twitter:title' content='Harel Panker | about' />
        <meta
          name='twitter:description'
          content="Nice to meet you! I'm frontend engineer with 3+ years of experience."
        />
      </Head>
      <main className='relative'>
        <Hero />
        <Main />
        <CTA />
        <CVButton />
      </main>
    </>
  );
};

export default AboutPage;

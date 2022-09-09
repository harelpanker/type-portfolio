import Head from 'next/head';
import CTA from '../components/about/CTA';
import CVButton from '../components/about/CVButton';
import Hero from '../components/about/Hero';
import Main from '../components/about/Main';

// https://foliospec-extended.webflow.io/about-v1-default-light-theme
const AboutPage = () => {
  return (
    <main className='relative'>
      <Hero />
      <Main />
      <CTA />
      <CVButton />
    </main>
  );
};

export default AboutPage;

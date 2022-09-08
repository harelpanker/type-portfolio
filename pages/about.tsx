import Head from 'next/head';
import Hero from '../components/about/Hero';
import Main from '../components/about/Main';

// https://foliospec-extended.webflow.io/about-v1-default-light-theme
const AboutPage = () => {
  return (
    <main className='relative'>
      <Hero />
      <Main />
    </main>
  );
};

export default AboutPage;

import Head from 'next/head';
import Hero from '../components/home/Hero';
import Recommendations from '../components/home/Recommendations';
import Work from '../components/home/Work';
import CTA from '../components/share/CTA';
import LogosSlide from '../components/share/LogosSlide';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosSlide />
      <Work />
      <Recommendations />
      <CTA />
      {/* https://portfolio-webflow-html-website-template.webflow.io/ */}
    </main>
  );
}

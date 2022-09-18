import Head from 'next/head';
import Hero from '../components/projects/Hero';
import Projects from '../components/projects/Projects';
import CTA from '../components/share/CTA';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Projects</title>
        <meta name='description' content='Some of my recent projects' />
        <meta name='twitter:title' content='Harel Panker | about' />
        <meta name='twitter:description' content='Some of my recent projects' />
      </Head>
      <main className='relative'>
        <Hero />
        <Projects />
        <CTA />
      </main>
    </>
  );
};

export default ProjectsPage;

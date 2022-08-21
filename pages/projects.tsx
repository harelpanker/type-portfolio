import Head from 'next/head';
import Hero from '../components/projects/Hero';
import Projects from '../components/projects/Projects';
import CTA from '../components/share/CTA';

const ProjectsPage = () => {
  return (
    <main className='relative'>
      <Hero />
      <Projects />
      <CTA />
    </main>
  );
};

export default ProjectsPage;

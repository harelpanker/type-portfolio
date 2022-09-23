import Image from 'next/future/image';
import profileImage from '/public/images/about/profile.jpeg';
import { Container } from '../ui-elements/styles';
import About from './About';
import Education from './Education';
import Knowledge from './Knowledge';
import TechSteck from './TechSteck';
import Experience from './Experience';

const Main = () => {
  return (
    <section className='flex flex-col gap-20 px-5 pb-20'>
      <Container maxWidth='max-w-9xl'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-start'>
          <figure className='overflow-hidden group xl:sticky top-36'>
            <Image
              className='grayscale transition duration-700 hover:grayscale-0 group-hover:scale-110'
              priority
              src={profileImage}
              alt='Harel Panker | front-end web developer'
            />
          </figure>
          <div className='xl:text-2xl text-base flex flex-col gap-10'>
            <About />
            <Education />
            <Knowledge />
            <TechSteck />
            <Experience />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Main;

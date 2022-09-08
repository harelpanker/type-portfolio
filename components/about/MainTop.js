import Image from 'next/future/image';
import profileImage from '/public/images/about/profile.jpeg';
import { Container } from '../ui-elements/styles';

const MainTop = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-12 items-center'>
        <div className='overflow-hidden group'>
          <Image
            className='grayscale transition duration-700 hover:grayscale-0 group-hover:scale-110'
            priority
            src={profileImage}
            alt='Harel Panker | front end web developer'
          />
        </div>
        <div className='text-lg flex flex-col gap-10'>
          <section>
            <h2 className='text-6xl font-medium mb-5'>About me</h2>
            <div className='mb-3 flex flex-col gap-1'>
              <p>Hi, my name is Harel, nice to meet you!</p>
              <p>I&apos;m married to Miri and father to Ilay & Maya :)</p>
            </div>
            <p>
              I&apos;m a frontend engineer with 5+ years of experience, mostly
              as a freelance, working for top technology companies, with the
              most updated technologies and tools. Always hungry for
              self-development and learning new stuff.
            </p>
          </section>
          <section>
            <h2 className='text-6xl font-medium mb-5'>Education</h2>
            <div className='mb-3 flex flex-col gap-1'>
              <p>
                The formal education I got at the{' '}
                <a
                  className='underline hover:text-slate-700 transition duration-300'
                  href='https://www.technion.ac.il/en/home-2/'
                  rel='noopener noreferrer'>
                  &apos;Technion - Israel Institute of Technology&apos;
                </a>
                , in a full stak web development course back in 2016.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default MainTop;

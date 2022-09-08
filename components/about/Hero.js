import { Container } from '../ui-elements/styles';

const Hero = () => {
  return (
    <header className='py-20 lg:py-40 lg:px-6 px-4 min-h-[70vh]'>
      <Container maxWidth='max-w-full'>
        <h1 className='xl:text-[16rem] text-center md:text-9xl text-6xl leading-snug font-bold'>
          Hey there.
        </h1>
      </Container>
    </header>
  );
};

export default Hero;

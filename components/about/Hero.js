import { Container } from '../ui-elements/styles';

const Hero = () => {
  return (
    <header className='py-20 lg:py-40 lg:px-6 px-4 xl:min-h-[70vh]'>
      <Container maxWidth='max-w-full'>
        <h1 className='xl:text-[16rem] xl:text-center md:text-9xl text-8xl xl:leading-snug font-bold'>
          Hey there.
        </h1>
      </Container>
    </header>
  );
};

export default Hero;

import { Container } from '../ui-elements/styles';

const Hero = () => {
  return (
    <header className='pb-20 pt-10 lg:py-40 lg:px-6 px-4 xl:min-h-[70vh]'>
      <Container maxWidth='max-w-full'>
        <h1 className='2xl:text-[16rem] xl:text-[14rem] xl:text-center text-8xl xl:leading-snug font-bold'>
          Hey there.
        </h1>
      </Container>
    </header>
  );
};

export default Hero;

import { Container } from '../ui-elements/styles';

const Hero = () => {
  return (
    <header className='pb-20 pt-10 lg:py-40 lg:px-6 px-4'>
      <Container>
        <h1 className='xl:text-[16rem] md:text-9xl text-6xl leading-snug font-bold'>
          Projects
        </h1>
      </Container>
    </header>
  );
};

export default Hero;

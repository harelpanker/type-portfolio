import React from 'react';
import {
  Container,
  SectionPadding,
  MainButton,
  SeconderyButton,
} from '../ui-elements/styles';

const Hero = () => {
  return (
    <header>
      <SectionPadding>
        <Container styles={'text-center'}>
          <div className='flex flex-col gap-6 py-0 lg:pb-20'>
            <h1 className='font-bold text-4xl lg:text-7xl'>
              <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600'>
                I convert design <br />
              </span>
              into a working website
            </h1>
            <div className='max-w-xl mx-auto text-base lg:text-xl text-slate-600 font-medium'>
              <p>
                Hi! I&rsquo;m Harel, a front end web developer. I convert design
                and, if needed, give montly maintanance.
              </p>
            </div>

            <div className='flex justify-center gap-6 flex-col lg:flex-row items-center mt-10'>
              <MainButton href='/projects'>View my work</MainButton>
              <SeconderyButton href='/about'>About</SeconderyButton>
            </div>
          </div>
        </Container>
      </SectionPadding>
    </header>
  );
};

export default Hero;

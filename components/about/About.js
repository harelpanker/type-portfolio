import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>About me</h2>

      <div className='mb-3 flex flex-col gap-2'>
        <p>My name is Harel. Nice to meet you!</p>

        <p>
          I&apos;m a frontend engineer with more than 3 years of experience. I
          work as a freelancer for several high-end technology companies, where
          we use the most updated and modern web development tools.
        </p>
      </div>
    </section>
  );
};

export default About;

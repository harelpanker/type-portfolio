import React from 'react';

const Education = () => {
  return (
    <section id='education'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>Education</h2>
      <div className='mb-3 flex flex-col gap-1'>
        <p>
          Full Stack Web Development course at the{' '}
          <a
            className='underline hover:text-purple-600 transition duration-300'
            href='https://www.technion.ac.il/en/home-2/'
            rel='noopener noreferrer'>
            &apos;Technion - Israel Institute of Technology&apos;
          </a>
        </p>
      </div>
    </section>
  );
};

export default Education;

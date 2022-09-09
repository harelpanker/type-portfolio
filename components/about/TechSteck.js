import React from 'react';

const TechSteck = () => {
  return (
    <section id='technolagis'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>Technolagis</h2>
      <div className='mb-3 flex flex-col gap-1'>
        <h3 className='xl:text-2xl text:xl font-semibold'>
          Naming the main technologies I&apos;m working with:
        </h3>
        <ul className='flex flex-col gap-2 xl:pl-10 pl-6 list-disc font-medium xl:my-4 my-2'>
          <li>
            <strong className='font-medium'>HTML</strong>
          </li>
          <li>
            <strong className='font-medium'>CSS / SCSS</strong>
          </li>
          <li>
            <strong className='font-medium'>Javascript</strong>
          </li>
          <li>
            <strong className='font-medium'>
              TailwindCSS / Styled Components
            </strong>
          </li>
          <li>
            <strong className='font-medium'>React / NextJS</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TechSteck;

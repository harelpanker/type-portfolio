import React from 'react';

const Knowledge = () => {
  return (
    <section className='w-full'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>Knowledge</h2>
      <div className='mb-3 flex flex-col gap-2'>
        <p>
          As a freelancer, I have gained lots of experience in several different
          areas of web development, but my knowledge is not limited to
          development alone.
        </p>
        <h3 className='xl:text-2xl text:xl font-semibold'>
          I also have great skills when it comes to:
        </h3>
        <ul className='flex flex-col gap-2 xl:pl-10 pl-6 list-disc font-medium xl:my-4 my-2'>
          <li>
            <strong className='font-medium'>User experience (UX)</strong>
          </li>
          <li>
            <strong className='font-medium'>User interface (UI)</strong>
          </li>
          <li>
            <strong className='font-medium'>
              Search Engine Optimisation (SEO)
            </strong>
          </li>
        </ul>
        <p>
          I use <strong>Figma</strong> as my design tool and{' '}
          <strong>Webflow</strong> as my development tool.
        </p>
      </div>
    </section>
  );
};

export default Knowledge;

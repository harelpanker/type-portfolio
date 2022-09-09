import React from 'react';

const Knowledge = () => {
  return (
    <section className='w-full'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>Knowledge</h2>
      <div className='mb-3 flex flex-col gap-2'>
        <p>
          As a freelance, I used to touch a lot of toppings, mostly related to
          development, but not only.
        </p>
        <h3 className='xl:text-2xl text:xl font-semibold'>
          I have vast knowledge when it comes to:
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
          When it comes to tools, <strong>Figma</strong> is my preferred design
          tool, most of the development is with <strong>Webflow</strong>.
        </p>
      </div>
    </section>
  );
};

export default Knowledge;

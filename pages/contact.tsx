import Head from 'next/head';
import Hero from '../components/contact/Hero';
import Form from '../components/contact/Form';

const ContactPage = () => {
  return (
    <main className='relative py-20 lg:py-40 lg:px-6 px-4 min-h-screen'>
      <div className='relative z-20 container max-w-6xl flex flex-col gap-20 items-center'>
        <Hero />
        <Form />
      </div>

      <svg
        className='absolute z-10 w-full h-full inset-0'
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'>
        <defs>
          <pattern
            id='p'
            width='100'
            height='100'
            patternUnits='userSpaceOnUse'
            patternTransform='scale(0.07)'>
            <circle
              data-color='outline'
              fill='none'
              stroke='#DBDBDB'
              strokeWidth='16.86'
              cx='50'
              cy='50'
              r='.5'></circle>
          </pattern>
        </defs>
        <rect fill='#F8FAFC' width='100%' height='100%'></rect>
        <rect fill='url(#p)' width='100%' height='100%'></rect>
      </svg>
    </main>
  );
};

export default ContactPage;

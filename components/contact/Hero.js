import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [steps] = useStore.steps();
  const [step, setStep] = useState(steps);

  useEffect(() => {
    steps === 1 && setStep('w-1/4');
    steps === 2 && setStep('w-2/4');
    steps === 3 && setStep('w-3/4');
    steps > 3 && setStep('w-4/4');
  }, [steps, setStep]);

  return (
    <header className='w-full max-w-lg text-center flex flex-col items-center'>
      <div className='relative container max-w-xs grid grid-cols-5 gap-14 h-1 mb-10 bg-slate-50'>
        <div className={`w-full bg-slate-50 relative z-20`}></div>
        <div className={`w-full bg-slate-50 relative z-20`}></div>
        <div className={`w-full bg-slate-50 relative z-20`}></div>
        <div className={`w-full bg-slate-50 relative z-20`}></div>
        <div className={`w-full bg-slate-50 relative z-20`}></div>

        <div
          className={`${step} transition duration-300 h-[80%] inset-0 top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-orange-600 to-purple-600 absolute z-10`}></div>
      </div>

      <div className='flex items-center flex-col gap-8 mb-12'>
        <h1 className='text-7xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600'>
          Get in touch
        </h1>
        <p className='xl:text-lg text-base'>
          Have a project in mind? Looking to partner or work together? Reach out
          through the form and I&apos;ll get back to you in the next 48 hours.
        </p>
      </div>
      <div className='hidden'>
        <a
          className='flex gap-3 items-center text-lg opacity-75 font-semibold transition hover:opacity-100'
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:harelpanker@protonmail.com'>
          <div className='mt-1'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          harelpanker@pm.com
        </a>
      </div>
    </header>
  );
};

export default Hero;

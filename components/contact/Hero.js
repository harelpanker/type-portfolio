import { useStore } from '../store/store';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [steps] = useStore.steps();
  const [success] = useStore.success();
  const [personeName] = useStore.personeName();
  const [step, setStep] = useState(steps);

  useEffect(() => {
    steps === 1 && setStep('w-1/3');
    steps === 2 && setStep('w-2/3');
    // steps === 3 && setStep('w-3/4');
    steps > 2 && setStep('w-3/3');
  }, [steps, setStep]);

  return (
    <header
      className={`w-full ${
        !success ? 'max-w-lg' : 'max-w-3xl'
      } text-center flex flex-col items-center`}>
      <div className='flex items-center flex-col gap-8 mb-12'>
        {!success ? (
          <>
            <div className='relative container max-w-xs grid grid-cols-4 gap-14 h-1 mb-10 bg-slate-50'>
              <div className={`w-full bg-slate-50 relative z-20`}></div>
              <div className={`w-full bg-slate-50 relative z-20`}></div>
              <div className={`w-full bg-slate-50 relative z-20`}></div>
              <div className={`w-full bg-slate-50 relative z-20`}></div>
              {/* <div className={`w-full bg-slate-50 relative z-20`}></div> */}

              <div
                className={`${step} transition duration-300 h-[80%] inset-0 top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-orange-600 to-purple-600 absolute z-10`}></div>
            </div>
            <h1 className='text-7xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600'>
              Get in touch
            </h1>
            <p className='text-base'>
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I&apos;ll get back to you in the next 48
              hours.
            </p>
          </>
        ) : (
          <div className='flex flex-col gap-2'>
            <h2 className='text-7xl leading-normal bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600'>
              Thank you {personeName}!
            </h2>
            <p className='text-lg'>I&apos;ll get back to you promptly :)</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;

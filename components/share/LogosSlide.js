import Image from 'next/image';
import uuid from 'react-uuid';
import Marquee from 'react-fast-marquee';
import { Container } from '../ui-elements/styles';

import logo1 from '/public/images/logos/ai21.svg';
import logo2 from '/public/images/logos/antidote.svg';
import logo3 from '/public/images/logos/datree.svg';
import logo4 from '/public/images/logos/everafter.svg';
import logo5 from '/public/images/logos/lin.svg';
import logo6 from '/public/images/logos/permit.svg';
import logo7 from '/public/images/logos/sedric.svg';

const logosData = [
  {
    id: uuid(),
    src: logo5,
    alt: 'Lin Health',
    href: 'https://www.lin.health/',
  },
  { id: uuid(), src: logo1, alt: 'AI21', href: 'https://www.ai21.com/' },
  {
    id: uuid(),
    src: logo2,
    alt: 'Antidote Health',
    href: 'https://www.antidotehealth.ai/',
  },
  { id: uuid(), src: logo3, alt: 'Datree', href: 'https://www.datree.io/' },
  {
    id: uuid(),
    src: logo4,
    alt: 'EverAfter',
    href: 'https://www.everafter.ai/',
  },
  { id: uuid(), src: logo6, alt: 'Permit', href: 'https://www.permit.io/' },
  { id: uuid(), src: logo7, alt: 'Sedric', href: 'https://www.sedric.ai/' },
];

const LogosSlide = () => {
  return (
    <section>
      <Container>
        <div className='w-full px-6 flex justify-center items-center mb-8 text-center font-semibold text-xl xl:text-2xl'>
          <h2>I&rsquo;m proud of working with</h2>
        </div>
        <div className='relative'>
          <div className='absolute z-10 pointer-events-none w-1/5 h-full inset-0 top-0 left-0 bg-gradient-to-r from-slate-50'></div>
          <div className='absolute z-10 pointer-events-none w-1/5 h-full inset-0 top-0 right-0 left-auto bg-gradient-to-l from-slate-50'></div>

          <Marquee pauseOnHover='true' speed={40}>
            {logosData.map((logo) => (
              <div key={logo.id} className='flex justify-center items-end'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={logo.href}
                  className='flex cursor-pointer justify-center items-end grayscale transition duration-500 px-12 py-2 rounded-2xl hover:grayscale-0'>
                  <Image src={logo.src} alt={logo.alt} />
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default LogosSlide;

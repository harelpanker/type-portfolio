import Image from 'next/image';
import { useState } from 'react';
import { Container, SectionPadding } from '../ui-elements/styles';
import uuid from 'react-uuid';

import elizabeth from '/public/images/home-page/recommendations/elizabeth.jpeg';
import eitan from '/public/images/home-page/recommendations/eitan.jpeg';
import shimon from '/public/images/home-page/recommendations/shimon.png';
const recommendations = [
  {
    id: uuid(),
    body: "I'm finding it hard to write a review for Harel. Not because he doesn't deserve it. The opposite. He’s so good at his job and such a pleasure to work with that I want to keep him for me and our company. He’s hard working, creative, energetic, and very knowledgable. In all honesty, I could not recommend him more highly.",
    name: 'Eitan Armon',
    position: 'Growth Manager at Lin Health',
    image: eitan,
    linkedinUrl: 'https://www.linkedin.com/in/eitanarmon/',
  },
  {
    id: uuid(),
    body: 'I have worked with Harel as a freelance developer at Antidote Health. He processes a great deal of knowledge and experience in the field of development, and always does extensive research when investigating if something can be done. Harel has great communication skills and professionalism and is always quick and efficient when completing projects. He has been a great pleasure to work with and I highly recommend him to any company looking to partner with him in development.',
    name: 'Elizabeth Cohen',
    position: 'Marketing Coordinator at Antidote',
    image: elizabeth,
    linkedinUrl: 'https://www.linkedin.com/in/amandaelizabethcrum/',
  },
  {
    id: uuid(),
    body: 'A very talented and resourceful developer that I am happy to work with.',
    name: 'Shimon Tolts',
    position: 'CEO & Co-Founder at Datree',
    image: shimon,
    linkedinUrl: 'https://www.linkedin.com/in/tolts/',
  },
];

const Recommendations = () => {
  const [show, setShow] = useState(true);
  const showAllHandler = () => setShow(false);
  return (
    <section>
      <SectionPadding>
        <Container>
          <header className='flex flex-col gap-4 text-center items-center'>
            <div className='text-sm uppercase font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>
              Testimonials
            </div>
            <h2 className='font-bold text-2xl lg:text-5xl'>
              Word on the street
            </h2>
          </header>
          <div
            className={`${
              show ? 'max-h-[40rem]' : 'max-h-min'
            } mt-10 lg:mt-20 transition relative overflow-hidden lg:max-h-min`}>
            <ul className='relative z-10 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {recommendations.map((reco) => (
                <li key={reco.id}>
                  <figure className='flex flex-col gap-4 p-6 rounded bg-slate-100'>
                    <figcaption className='relative flex flex-row gap-3 items-center'>
                      <Image
                        src={reco.image}
                        alt={reco.name}
                        className='rounded-full w-14 h-14 shrink-0'
                        width={56}
                        height={56}
                      />
                      <div>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={reco.linkedinUrl}
                          className='text-lg font-semibold'>
                          {reco.name}
                        </a>
                        <p className='text-xs'>{reco.position}</p>
                      </div>
                    </figcaption>
                    <blockquote className='mx-auto w-full max-w-3xl text-sm italic'>
                      {reco.body}
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
            {show && (
              <div className='lg:hidden pb-16 bg-gradient-to-t from-slate-50 via-slate-50 flex items-end justify-center absolute z-20 inset-0 top-auto h-[50%] w-full'>
                <button
                  onClick={() => showAllHandler()}
                  className='relative flex items-center justify-center gap-1 overflow-hidden z-20 group bg-slate-900 text-center text-slate-50 px-6 lg:px-8 py-2 lg:py-3 text-lg font-medium'>
                  <span className='relative z-30 transition duration-300 group-hover:text-slate-900'>
                    Read more...
                  </span>
                  <span className='absolute z-20 inset-0 w-full h-full flex justify-center items-center'>
                    <span className='w-0 h-0 rounded-full group-hover:w-80 group-hover:h-80 bg-slate-200 transition-all duration-700'></span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </Container>
      </SectionPadding>
    </section>
  );
};

export default Recommendations;

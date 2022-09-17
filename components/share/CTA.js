import Link from 'next/link';
import { Container } from '../ui-elements/styles';

const CTA = () => {
  return (
    <section className='pb-20 px-4 lg:px-6 text-center'>
      <Container>
        <div className='font-bold lg:text-6xl text-3xl leading-snug flex justify-center flex-col items-center'>
          <h2>Ready to work together?</h2>
          <div className='group lg:mt-4'>
            <Link href='#'>
              <a className='relative z-20 py-4 cursor-pointer bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>
                Let&apos;s get on a call.
              </a>
            </Link>
            <div className='w-full h-1 rounded-full overflow-hidden'>
              <div className='transition duration-500 bg-gradient-to-r from-orange-600 to-purple-600 w-full h-full translate-x-0 group-hover:-translate-x-[100%]'></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

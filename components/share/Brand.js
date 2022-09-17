import Link from 'next/link';

const Brand = () => {
  return (
    <Link href='/'>
      <a className='font-bold text-3xl'>
        Panker
        <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600'>
          .
        </span>
        io
      </a>
    </Link>
  );
};

export default Brand;

import Link from 'next/link';

const FooterLinks = () => {
  return (
    <ul className='flex gap-6 text-lg font-medium'>
      <li>
        <Link href='/projects'>
          <a className='transition duration-300 hover:text-purple-600'>
            Projects
          </a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a className='transition duration-300 hover:text-purple-600'>About</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a className='transition duration-300 hover:text-purple-600'>
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;

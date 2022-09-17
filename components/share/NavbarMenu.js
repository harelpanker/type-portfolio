import { MainButton } from '../ui-elements/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavbarMenu = ({ openModal }) => {
  return (
    <>
      <ul className='xl:flex hidden gap-6 text-lg font-medium items-center relative z-10'>
        <li>
          <a
            className='duration-300 hover:text-purple-600 transition'
            href='https://github.com/harelpanker'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className='duration-300 hover:text-purple-600 transition'
            href='https://www.linkedin.com/in/panker-harel/'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <MainButton href='/contact'>Contact</MainButton>
        </li>
      </ul>

      <button onClick={openModal} className='text-slate-900 block xl:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 text-slate-900 block xl:hidden'>
          <path
            fillRule='evenodd'
            d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </>
  );
};

export default NavbarMenu;

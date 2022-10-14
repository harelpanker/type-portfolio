import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MainButton } from '../ui-elements/styles';
import Link from 'next/link';

const NavbarMobile = ({ isOpen, toggleMobileMenu }) => {
  return (
    <div
      className={`w-full h-screen fixed z-40 inset-0 bg-slate-50 px-5 py-32 lg:hidden ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <div className="flex flex-col w-full h-full grow justify-between gap-16">
        <ul
          className="flex flex-col gap-6 text-lg font-medium items-center"
          onClick={toggleMobileMenu}>
          <li>
            <Link href="/projects">
              <a className="transition duration-300 hover:text-purple-600">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="transition duration-300 hover:text-purple-600">
                About
              </a>
            </Link>
          </li>
          <li>
            <MainButton href="/contact">Contact</MainButton>
          </li>
        </ul>

        <ul className="flex w-full justify-center gap-6 text-lg font-medium items-center relative z-10">
          <li>
            <a
              className="duration-300 hover:text-purple-600 transition"
              href="https://github.com/harelpanker"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              className="duration-300 hover:text-purple-600 transition"
              href="https://www.linkedin.com/in/panker-harel/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;

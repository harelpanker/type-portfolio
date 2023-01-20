import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const NavbarMenu = ({ hasScrolled, toggleMobileMenu }) => {
  return (
    <>
      <ul className="xl:flex hidden gap-6 text-lg font-medium items-center relative z-50">
        <li>
          <a
            aria-label="My GitHub account"
            className="duration-300 hover:text-purple-600 transition"
            href="https://github.com/harelpanker"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            aria-label="My Linkedin account"
            className="duration-300 hover:text-purple-600 transition"
            href="https://www.linkedin.com/in/panker-harel/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${
              hasScrolled
                ? 'bg-slate-900 text-slate-50'
                : 'bg-slate-100 border-slate-900 text-slate-900'
            } border transition duration-500 relative min-w-[10rem] flex items-center justify-center gap-1 overflow-hidden z-20 group text-center px-6 lg:px-8 py-2 lg:py-3 text-lg font-medium`}>
            <span
              className={`relative z-30 transition duration-300 group-hover:text-slate-900 ${
                hasScrolled
                  ? 'group-hover:text-slate-900'
                  : 'group-hover:text-slate-50'
              }`}>
              Contact
            </span>
            <span className="absolute z-20 inset-0 w-full h-full flex justify-center items-center">
              <span
                className={`w-0 h-0 rounded-full group-hover:w-80 group-hover:h-80 transition-all duration-700 ${
                  hasScrolled ? 'bg-slate-200' : 'bg-slate-900'
                }`}></span>
            </span>
          </Link>
        </li>
      </ul>

      <button
        aria-label="Toggle mobile menu"
        onClick={toggleMobileMenu}
        className="text-slate-900 block xl:hidden relative z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-slate-900 block xl:hidden">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export default NavbarMenu;

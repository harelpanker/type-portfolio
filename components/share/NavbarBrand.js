import Link from 'next/link';
import Brand from './Brand';

const NavbarBrand = ({ toggleMobileMenu }) => {
  return (
    <div className="flex gap-10 relative z-50">
      <Brand toggleMobileMenu={toggleMobileMenu} />
      <ul className="xl:flex gap-6 text-lg font-medium items-center hidden">
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
      </ul>
    </div>
  );
};

export default NavbarBrand;

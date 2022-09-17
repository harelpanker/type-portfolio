import Link from 'next/link';
import { Container } from '../ui-elements/styles';
import Brand from './Brand';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <header className='min-h-[70px] sticky top-0 z-50 bg-slate-50 shadow-md flex items-center'>
      <Container styles='flex items-center justify-between'>
        <Brand />
        <NavbarMenu />
      </Container>
    </header>
  );
};

export default Navbar;

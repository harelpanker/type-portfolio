import { useState, useEffect, useCallback } from 'react';
import { Container } from '../ui-elements/styles';
import NavbarBrand from './NavbarBrand';

import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';

const scrollOffset = 100;
const trackScroll = true;

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(!trackScroll);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const checkScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > scrollOffset) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    },
    [scrollOffset]
  );

  useEffect(() => {
    // track events only if requested
    if (trackScroll) {
      window.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }
  }, [checkScroll, trackScroll]);

  return (
    <>
      <header
        className={`min-h-[70px] px-5 transition duration-1000 sticky top-0 z-50 bg-slate-50 flex items-center ${
          hasScrolled && 'shadow-md'
        }`}>
        <Container>
          <nav className='flex items-center justify-between'>
            <NavbarBrand />
            <NavbarMenu openModal={openModal} />
          </nav>
        </Container>
      </header>
      <NavbarMenuMobile closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default Navbar;

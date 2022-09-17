import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Brand from './Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MainButton } from '../ui-elements/styles';
import Link from 'next/link';

const NavbarMenuMobile = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <div className='fixed inset-0 w-full h-screen overflow-y-auto'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Panel className='w-full flex flex-col h-full transform overflow-hidden bg-slate-50 p-5 pt-0 text-left align-middle'>
              <div className='flex items-center justify-between min-h-[70px]'>
                <Brand closeModal={closeModal} />

                <button
                  onClick={closeModal}
                  className='text-slate-900 block xl:hidden'>
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
              </div>
              <div className='flex flex-col w-full py-10 grow justify-between'>
                <ul
                  className='flex flex-col gap-6 text-lg font-medium items-center'
                  onClick={() => closeModal()}>
                  <li>
                    <Link href='/projects'>
                      <a className='transition duration-300 hover:text-purple-600'>
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a className='transition duration-300 hover:text-purple-600'>
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <MainButton href='/contact'>Contact</MainButton>
                  </li>
                </ul>

                <ul className='flex w-full justify-center gap-6 text-lg font-medium items-center relative z-10'>
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
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NavbarMenuMobile;

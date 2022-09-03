import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export function Container({ children, styles, maxWidth }) {
  return (
    <div
      className={`container ${
        maxWidth ? maxWidth : 'max-w-7xl'
      } lg:px-6 relative z-20 ${styles}`}>
      {children}
    </div>
  );
}

export function SectionPadding({ children, styles }) {
  return (
    <div className={`${styles ? styles : 'px-5 py-20 lg:py-40'}`}>
      {children}
    </div>
  );
}

export function MainButton({ children, href }) {
  return (
    <Link href={href ? href : '#'}>
      <a className='relative min-w-[10rem] flex items-center justify-center gap-1 overflow-hidden z-20 group bg-slate-900 text-center text-slate-50 px-6 lg:px-8 py-2 lg:py-3 text-lg font-medium'>
        <span className='relative z-30 transition duration-300 group-hover:text-slate-900'>
          {children}
        </span>
        <span className='absolute z-20 inset-0 w-full h-full flex justify-center items-center'>
          <span className='w-0 h-0 rounded-full group-hover:w-80 group-hover:h-80 bg-slate-200 transition-all duration-700'></span>
        </span>
      </a>
    </Link>
  );
}

export function SeconderyButton({ children, href, icon }) {
  return (
    <Link href={href ? href : '#'}>
      <a className='group text-slate-900 font-medium flex items-center gap-2'>
        <span>{children}</span>
        <FontAwesomeIcon
          className='group-hover:translate-x-2 transition duration-300 ease-in-out'
          icon={icon ? icon : faArrowRightLong}
        />
      </a>
    </Link>
  );
}

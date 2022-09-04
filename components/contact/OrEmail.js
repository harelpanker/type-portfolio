import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const OrEmail = () => {
  return (
    <div className='flex flex-col items-center'>
      <div class='inline-flex justify-center items-center w-full'>
        <hr class='my-8 w-64 h-px bg-slate-200 border-0' />
        <span class='absolute left-1/2 bg-slate-50 px-3 font-medium text-slate-900 -translate-x-1/2'>
          or
        </span>
      </div>
      <a
        className='flex gap-3 items-center text-lg opacity-75 font-semibold transition hover:opacity-100'
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:harelpanker@protonmail.com'>
        <div className='mt-1'>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        harelpanker@pm.com
      </a>
    </div>
  );
};

export default OrEmail;

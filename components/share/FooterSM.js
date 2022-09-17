import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterSM = () => {
  return (
    <ul className='flex gap-6 text-xl font-medium'>
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
  );
};

export default FooterSM;

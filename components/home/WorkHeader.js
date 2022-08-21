import { MainButton } from '../ui-elements/styles';

const WorkHeader = () => {
  return (
    <header className='flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-end'>
      <div className='flex flex-col gap-4'>
        <div className='text-sm font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>
          PROJECTS
        </div>
        <h2 className='font-bold text-2xl lg:text-5xl'>
          I bring results.
          <br />
          My clients are proof.
        </h2>
      </div>
      <div className='hidden lg:block'>
        <MainButton href='/projects'>View More</MainButton>
      </div>
    </header>
  );
};

export default WorkHeader;

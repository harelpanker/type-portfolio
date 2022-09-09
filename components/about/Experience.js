import { companies } from '../../public/data/companies';

const Experience = () => {
  return (
    <section id='experience'>
      <h2 className='xl:text-6xl text-5xl font-medium mb-5'>Experience</h2>
      <div className='mb-3 flex flex-col gap-4'>
        <p>
          For the past 2 years, I&apos;m working mainly with startups, fully
          responsible for building their websites, adding new features, and
          overall maintenance.
        </p>
        <p>Nameing some of them:</p>
        <ul className='flex flex-col gap-2 xl:pl-10 pl-6 list-disc font-medium xl:mt-4 mt-2'>
          {companies.map((company) => (
            <li key={company.id}>
              <a
                className='underline hover:text-purple-600 transition duration-300'
                href={company.url}
                rel='noopener noreferrer'>
                {company.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;

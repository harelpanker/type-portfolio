import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../../public/data/projects';

const WorkProjects = () => {
  return (
    <ul className='mt-10 lg:mt-28 flex flex-col gap-20'>
      {projectsData
        .filter((project) => project.isFeatured)
        .map((project) => (
          <li key={project.id}>
            <Image src={project.src} alt={project.title} placeholder='blur' />
            <div className='flex gap-4 mt-6 flex-col lg:flex-row justify-between items-start lg:items-end'>
              <div className='flex flex-col items-start'>
                <div className='font-semibold text-sm px-2 mb-2 rounded-full rounded-bl-none bg-slate-200'>
                  {project.tag}
                </div>
                <h3 className='text-xl lg:text-3xl font-bold'>
                  {project.title}
                </h3>
                <p className='text-sm lg:text-base'>
                  {project.short_description}
                </p>
              </div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={project.href}
                className='group text-slate-900 font-medium cursor-pointer flex items-center gap-2'>
                <span>View live</span>
                <FontAwesomeIcon
                  className='group-hover:translate-x-2 transition duration-300 ease-in-out'
                  icon={faArrowRightLong}
                />
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default WorkProjects;

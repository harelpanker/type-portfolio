import { useState } from 'react';
import uuid from 'react-uuid';
import { Container } from '../ui-elements/styles';
import { projectsData } from '../../public/data/projects';
import ProjectsList from './ProjectsList';
import ProjectsFilters from './ProjectsFilters';

const Projects = () => {
  const buttons = [
    { id: uuid(), name: 'show all' },
    { id: uuid(), name: 'webflow' },
    { id: uuid(), name: 'code' },
  ];

  const [projectsArray, setProjectsArray] = useState(projectsData);
  const [activeTag, setActiveTag] = useState('show all');

  const filterHandler = (event) => {
    const tagName = event.target.value;

    const filterdArray = projectsData.filter(
      (project) => project.type === tagName
    );

    tagName != 'show all'
      ? setProjectsArray(filterdArray)
      : setProjectsArray(projectsData);
  };

  return (
    <section className='lg:px-6 px-4 pb-10 lg:pb-32'>
      <Container>
        <ProjectsFilters
          buttons={buttons}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          filterHandler={filterHandler}
        />
        <ProjectsList projectsArray={projectsArray} />
      </Container>
    </section>
  );
};

export default Projects;

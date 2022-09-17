import { Container, SectionPadding } from '../ui-elements/styles';
import WorkHeader from './WorkHeader';
import WorkProjects from './WorkProjects';

const Work = () => {
  return (
    <section className='pt-20 xl:pt-0'>
      <SectionPadding>
        <Container>
          <WorkHeader />
          <WorkProjects />
        </Container>
      </SectionPadding>
    </section>
  );
};

export default Work;

import { Container } from '../ui-elements/styles';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSM from './FooterSM';

const Footer = () => {
  return (
    <footer className='pb-10 pt-32 px-4'>
      <Container>
        <div className='flex gap-10 md:flex-row flex-col mx:items-center justify-between'>
          <FooterBrand />
          <FooterLinks />
          <FooterSM />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

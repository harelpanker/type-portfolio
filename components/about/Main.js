import MainBottom from './MainBottom';
import MainTop from './MainTop';

const Main = () => {
  return (
    <section className='flex flex-col gap-20'>
      <MainTop />
      <MainBottom />
    </section>
  );
};

export default Main;

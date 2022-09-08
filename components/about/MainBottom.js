import { Container } from '../ui-elements/styles';

const MainBottom = () => {
  return (
    <Container>
      <div className='flex justify-between'>
        <section className='w-full max-w-lg'>
          <h2 className='text-6xl font-medium mb-5'>Knowledge</h2>
          <div className='mb-3 flex flex-col gap-2'>
            <p>
              As a freelance, I used to touch a lot of toppings, mostly related
              to development, but not only.
            </p>
            <p>
              I have vast knowledge when it comes to{' '}
              <strong>User experience (UX)</strong>, including{' '}
              <strong>User interface (UI)</strong> and,{' '}
              <strong>Search Engine Optimisation (SEO)</strong>.
            </p>
            <p>
              When it comes to tools, <strong>Figma</strong> is my preferred
              design tool, most of the development is with{' '}
              <strong>Webflow</strong>.
            </p>
          </div>
        </section>
        <section className='w-full max-w-lg'>
          <h2 className='text-6xl font-medium mb-5'>Technolagis</h2>
          <div className='mb-3 flex flex-col gap-1'>
            <p>Hi, my name is Harel, nice to meet you!</p>
            <p>I&apos;m married to Miri and father to Ilay & Maya :)</p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default MainBottom;

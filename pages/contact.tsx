import Head from 'next/head';
import Hero from '../components/contact/Hero';
import Form from '../components/contact/Form';
import OrEmail from '../components/contact/OrEmail';
import { useStore } from '../components/store/store';

const ContactPage = () => {
  const [success] = useStore.success();
  return (
    <>
      <Head>
        <title>Harel Panker | Contact</title>
        <meta name='description' content='Contact me'/>
        <meta name='twitter:title' content='Harel Panker | about' />
        <meta name='twitter:description' content='Contact me' />
      </Head>
      <main className='relative py-20 lg:py-40 lg:px-6 px-4 min-h-screen'>
        <div className='relative z-20 container max-w-6xl flex flex-col gap-20 items-center'>
          <Hero />
          <Form />
          {!success && <OrEmail />}
        </div>
      </main>
    </>
  );
};

export default ContactPage;

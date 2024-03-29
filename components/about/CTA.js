import Link from 'next/link';
import { Container } from '../ui-elements/styles';

const CTA = () => {
  return (
    <section className="overflow-hidden px-4 py-36 xl:py-48">
      <Container>
        <div className="text-center flex flex-col gap-6">
          <h2 className="font-medium text-xl">Let&apos;s Chat</h2>
          <Link
            href="/contact"
            className="font-medium text-7xl md:text-9xl transition-all duration-500 tracking-normal hover:tracking-[0.35em]">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

import Link from 'next/link';

const Brand = ({ toggleMobileMenu }) => {
  return (
    <Link
      href="/"
      className="font-bold text-3xl"
      onClick={() => toggleMobileMenu()}>
      Panker
      <span className="bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
        .
      </span>
      io
    </Link>
  );
};

export default Brand;

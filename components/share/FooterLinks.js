import Link from 'next/link';

const FooterLinks = () => {
  return (
    <ul className="flex gap-6 text-lg font-medium">
      <li>
        <Link
          href="/projects"
          className="transition duration-300 hover:text-purple-600">
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="transition duration-300 hover:text-purple-600">
          About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="transition duration-300 hover:text-purple-600">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;

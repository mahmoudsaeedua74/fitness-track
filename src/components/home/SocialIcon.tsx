import type { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

interface SocialLink {
  id: number;
  href: string;
  icon: ReactNode;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: 'https://facebook.com',
    icon: <FaFacebookF className="w-5 h-5" />,
    hoverColor: 'hover:bg-black-text',
  },
  {
    id: 2,
    href: 'https://twitter.com',
    icon: <FaInstagram className="w-5 h-5" />,
    hoverColor: 'hover:bg-black-text',
  },
  {
    id: 3,
    href: 'https://x.com',
    icon: <FaXTwitter className="w-5 h-5" />,
    hoverColor: 'hover:bg-black-text',
  },
];

export function SocialLinks() {
  return (
    <ul className="flex gap-6 mt-8 self-center sm:self-start">
      {socialLinks.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] 
              flex items-center justify-center rounded-full 
               text-white transition-all duration-300 ease-in-out
              ${item.hoverColor} hover:text-white`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

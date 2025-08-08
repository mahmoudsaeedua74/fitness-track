import { SocialLinks } from './SocialIcon';
const links = [
  { id: 1, name: 'Home', url: '#Home' },
  { id: 2, name: 'About', url: '#About' },
  { id: 3, name: 'Service', url: '#Service' },
  { id: 4, name: 'Contact', url: '#Contact' },
];

export default function Footer() {
  return (
    <footer
      className="pt-[60px] pb-[40px]  text-center sm:text-start bg-cover bg-no-repeat overflow-hidden text-[#9E9E9E] text-base lg:text-[20px] "
      style={{
        backgroundImage: 'url("/assets/Footer.webp")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-[40px] ">
        {/* صفوف جنب بعض */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center lg:gap-[80px]">
          {/* الصف الأول: صورة + وصف + سوشيال ميديا */}
          <div className="flex flex-col lg:w-[300px] justify-center  w-full gap-4">
            <img
              src="assets/logo.png"
              loading="lazy"
              alt="footer logo"
              className="w-[120px]  h-[36px] lg:w-[200px] lg:h-[65px] rounded-md"
            />
            <p className=" mt-4">A short description about the gym goes here.</p>
            <SocialLinks />
          </div>

          {/* الصف الثاني: روابط الموقع */}
          <div className="flex flex-col lg:w-[300px] w-full items-center space-y-[11px]">
            <p className="text-h5 lg:text-[24px] font-extrabold cursor-pointer text-white mb-4">
              Site Links
            </p>
            <ul className="flex flex-col gap-2  ">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="relative inline-block  px-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col lg:w-[300px] w-full items-center space-y-[11px]">
            <p className="text-h5 lg:text-[24px] font-extrabold cursor-pointer  text-white mb-4">
              Contact Us
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@yourgym.com"
                className="relative inline-block  px-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                info@yourgym.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href="tel:+201234567890"
                className="relative inline-block  px-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black-text after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                +20 123 456 7890
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white mt-10 pt-6 text-center">
          <p className="max-w-[606px] mx-auto">جميع الحقوق محفوظة © 2025</p>
        </div>
      </div>
    </footer>
  );
}

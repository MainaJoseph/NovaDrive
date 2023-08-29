import Link from "next/link";
import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col text-white mt-5 border-t border-orange-500 bg-gray-800'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <h1 className='text-2xl font-bold text-white cursor-pointer'>NovaDrive</h1>
        <p className='text-base text-white'>
          NovaDrive 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-orange-500">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-white hover:text-orange-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 NovaDrive. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-white hover:text-orange-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-white hover:text-orange-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

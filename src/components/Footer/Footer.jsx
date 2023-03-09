import Link from 'next/link';
import { useRouter } from 'next/router';
import { footerLinks } from '../../constant';
import FooterBottom from './components/FooterBottom/FooterBottom';
import FooterBottomLinks from './components/FooterBottomLinks/FooterBottomLinks';
import FooterRight from './components/FooterRight/FooterRight';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={`${router.pathname === '/contact' ? 'pt-[60px]' : 'pt-[200px]'} bg-[#001022] text-white p-[60px_0_10px_0]`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-[18px] uppercase xlg:mb-[30px] mb-[10px] font-normal leading-[1.2]">
              Services
            </h3>
            <div className="inline-block text-left min-w-[150px]">
              <ul className="mb-[1rem] xlg:p-0 p-[10px_0]">
                {footerLinks.map((link) => (
                  <li key={link.title} className="md:mb-[14px] mb-[11px]">
                    <Link
                      href={link.href}
                      className="text-[13px] font-[300] text-[#97aabf] bg-transparent hover:text-white hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FooterRight />
        </div>
      </div>
      <FooterBottom />
      <FooterBottomLinks />
    </footer>
  );
};

export default Footer;
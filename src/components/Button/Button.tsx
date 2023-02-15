import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`xlg:text-[15px] text-[14px] font-semibold rounded-[55px] xlg:p-[20px_75px] p-[20px_30px] border-[2px] border-[#1f92f4] mt-[12px] uppercase transition-all duration-[0.5s] inline-block hover:transition-all hover:duration-[0.5s] ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
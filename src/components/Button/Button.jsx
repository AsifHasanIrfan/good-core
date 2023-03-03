import Link from 'next/link';

const Button = ({ children, href, className, variant }) => {
  return (
    <Link
      href={href}
      className={`xlg:text-[15px] text-[14px] font-semibold rounded-[55px] xlg:p-[20px_75px] p-[20px_30px] border-[2px] border-primary mt-[12px] uppercase transition-all duration-[0.5s] inline-block hover:transition-all hover:duration-[0.5s] ${className} ${
        variant === "fill"
          ? "bg-primary text-white hover:text-primary hover:bg-transparent hover:shadow-[0_0_15px_#1f92f4]"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
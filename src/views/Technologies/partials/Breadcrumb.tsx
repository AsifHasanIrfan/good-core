import Link from "next/link";

const Breadcrumb = () => {
  return (
    <>
      <div className="text-center w-full mt-[15px] mb-[-40px]">
        <p className="mb-[1rem]">
          <span>
            <span className="text-[16px]">
              <Link
                href="/"
                className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
              >
                Home
              </Link>
              &gt;{" "}
              <span className="text-[16px] text-[#111] p-[0_10px]">
                Technology
              </span>
            </span>
          </span>
        </p>
      </div>

      {/* bottom text  */}
      <div className="container p-[80px_0]">
        <div className="row !text-center">
          <div className="col-md-10 ml-[8.3333333333%]">
            <p className="text-[18px] leading-[30px]">
              There's no single technology stack that works for all software
              development projects. GoodCore has deep expertise with a wide
              variety of cutting edge development tools and we advise clients on
              choice of suitable technology for their projects enabling secure,
              scaleable, and flexible software applications which are easy to
              support and upgrade in the long run.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;

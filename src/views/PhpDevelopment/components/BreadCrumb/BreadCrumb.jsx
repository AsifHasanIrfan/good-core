import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
    <div className="text-center w-full mt-[15px] mb-[-40px]">
      <p className="mb-[1rem]">
        <span>
          <span className="text-[16px]">
            <Link
              href="/"
              className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
            >
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/technologies"
              className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
            >
              Technology
            </Link>{" "}
            &gt;{" "}
            <span className="text-[16px] text-[#111] p-[0_10px]">
              PHP Development Company
            </span>
          </span>
        </span>
      </p>
    </div>
  );
};

export default BreadCrumb;

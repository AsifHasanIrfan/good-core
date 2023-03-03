import React from 'react';
import { doNext } from '../../constant';

const Contact = () => {
  return (
    <section className="p-[80px_0] pt-[30px]">
      <div className="container">
        <div className="mb-[-200px] relative bg-[#2192f3] text-[#f1f1f1] p-0 overflow-hidden rounded-[10px] bg-[url('/assets/images/shape-bg.webp')] bg-no-repeat bg-[top_-70px_right_-70px] shadow-[0_0_20px_rgb(31_146_244_/_12%)] m-[20px_auto]">
          <div className="row">
            <div className="col-md-7">
              <div className="p-[70px_50px_50px]">
                <h2 className="font-bold text-[39px] tracking-[1px] uppercase mb-[0.5rem] leading-[1.2]">
                  Get in touch with us
                </h2>
                <div>
                  <form action=""></form>
                </div>
              </div>
            </div>

            <div className="col-md-5 m-0 bg-[#1b78e0] border-l-0 !p-[70px_50px_50px]">
              <div className="">
                <h4 className="font-bold text-[39px] tracking-[1px] mb-[30px] leading-[1.6]">
                  Things <br /> we do next
                </h4>

                <ul className="list-none pl-0 mt-0 mb-[1rem]">
                  {doNext.map((item) => (
                    <li
                      key={item}
                      className="mb-[25px] p-[5px_0] leading-[30px] min-h-[50px] before:text-[#f1f1f1] before:text-[40px] before:leading-[.6] before:content-['•'] before:pr-[15px] before:align-middle before:absolute"
                    >
                      <span className="inline-block pl-0 max-w-[calc(100%_-_30px)] ml-[25px] align-middle text-[16px] leading-[30px]">
                        { item }
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
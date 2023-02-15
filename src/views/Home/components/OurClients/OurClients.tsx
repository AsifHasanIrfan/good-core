import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Image from 'next/image';
import React from 'react';
import { ourClients } from '../../constant';

const OurClients = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0] relative overflow-hidden w-full px-[15px] mx-auto">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              OUR <SectionHeading highlightText="CLIENTS" />
            </h2>
            <p className="sub-heading xlg:!pb-[1rem] !pb-[20px] !text-[#4e5862]">
              GoodCore serves a global clientele consisting of entrepreneurs,
              startups, small and medium businesses, and large enterprises. Here
              are some of our esteemed clients.
            </p>
          </div>

          <div className="col-12 !z-[99]">
            <div className="mt-[65px]">
              {ourClients.map((client) => (
                <Image
                  key={client.id}
                  title={client.title}
                  width={client.width}
                  height={client.height}
                  src={client.src}
                  alt="client-img"
                  className="m-[10px_12px] grayscale-[1] hover:grayscale-0 max-w-full h-auto inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
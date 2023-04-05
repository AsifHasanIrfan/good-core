import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import TechItem from "../../../../shared/Technology/TechItem/TechItem";
import { nodeJsToolsArray } from "../../constant/index";
const NodeJsTechnologies = () => {
  return (
    <section className="md:pb-[80px] pb-[40px]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !tracking-[2px]">
              <SectionHeading highlightText="NODE.JS" /> TOOLS AND TECHNOLOGIES
              WE WORK ON{" "}
            </h2>
            <p className="text-[1rem] leading-[24px] mb-[1rem] text-left">
              For the various projects we have delivered over the years, our
              development team has relied on the following technologies, tools,
              platforms, and architectures.
            </p>
          </div>
        </div>

        {nodeJsToolsArray?.map((item, i) => (
          <div
            key={i}
            className="row !mt-[1rem] flex items-center text-center md:text-left last:items-start m-[22px_0]"
          >
            <div className="col-md-3 !px-[15px] xlg:px-0 !p-0 last:!mt-[.5rem] last:!pt-[.25rem]">
              <h4 className="mt-[10px] text-primary-100 font-bold text-[20px] xlg:text-[1.5rem] leading-[1.2] mb-[.5rem]">
                {item?.title}
              </h4>
            </div>

            <div className="col-md-9">
              <ul>
                {item?.technologies?.map((item) => (
                  <TechItem key={item.title} data={item} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NodeJsTechnologies;

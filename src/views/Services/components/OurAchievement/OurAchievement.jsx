import parse from 'html-react-parser';
import { ourAchievementsData } from "../../constant";

const OurAchievement = () => {
  return (
    <section className="text-white bg-primary text-center md:p-[80px_0] p-[40px_0]">
      <div className="container md:p-0 text-center">
        {/* Section Heading */}
        <div className="row">
          <div className="col-md-12 p-0">
            <h2 className="section-heading text-white">Our Achievements</h2>
            <p className="text-[20px] text-white mb-[1rem]">Founded in 2005, today GoodCore is one of the top players in the software product development industry in the UK.</p>
          </div>
        </div>

        <div className="row my-[1.5rem]">
          {ourAchievementsData.map(achievement =><div key={achievement.value} className="col-md-3">
            <div className="m-[10px_auto] text-[80px] font-bold text-white">{achievement.value}</div>
            <div className="text-[18px] font-bold uppercase">{parse(achievement.heading)}</div>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
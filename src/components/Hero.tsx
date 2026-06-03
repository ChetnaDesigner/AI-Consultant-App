import starIcon from "../assets/star.svg";
import Textarea from "./textarea";

function Hero() {
  return (
    <div className="mx-auto pt-[72px] lg:w-4xl">
      <img src={starIcon} alt="star" className="mx-auto h-6 w-6" />
      <h1 className="py-[10px] text-center text-[36px] leading-[44px] font-bold text-heading">
        AI Software Development Consultant
      </h1>
      <p className="text-center text-[17px] leading-[28px] text-body">
        Describe your app idea and get a complete project proposal with
        technical <br />
        recommendations, timeline, cost estimation and more.
      </p>
      <div className="mt-[53px] flex flex-col gap-[26px] rounded-lg border border-border bg-surface px-[26px] py-[3px] shadow-md">
        <h2 className="text-start text-[18px] leading-[28px] font-semibold text-heading">
          Describe Your App Idea
        </h2>
        <p className="text-[15px] leading-[28px] text-body">
          Write your app idea in detail. AI will analyze and generate a complete
          proposal for you.
        </p>
        <Textarea />
      </div>
    </div>
  );
}

export default Hero;

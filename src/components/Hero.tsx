import starIcon from "../assets/star.svg";
import Textarea from "./TextArea";
function Hero() {
  return (
    <div className="mx-auto pt-[72px] lg:w-4xl">
      <img src={starIcon} alt="star" className="mx-auto h-6 w-6" />

      <div className="mt-[53px] flex flex-col gap-[26px] rounded-lg border border-border bg-surface px-[26px] py-[30px] shadow-md">
        <Textarea />
      </div>
    </div>
  );
}

export default Hero;

import Image from "next/image";
import lineOne from "../../../Assets/Illustrations/line-1.svg";
import lineFive from "../../../Assets/Illustrations/line-5.svg";
import lineTen from "../../../Assets/Illustrations/line-10.svg";
import lineThree from "../../../Assets/Illustrations/line-3.svg";
import lineSeven from "../../../Assets/Illustrations/line-7.svg";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Image src={lineOne} alt="" aria-hidden="true" className="hero__flourish hero__flourish--one" />
      <Image src={lineFive} alt="" aria-hidden="true" className="hero__flourish hero__flourish--two" />
      <Image src={lineTen} alt="" aria-hidden="true" className="hero__flourish hero__flourish--three" />
      <Image src={lineThree} alt="" aria-hidden="true" className="hero__flourish hero__flourish--four" />
     
      <div className="container hero__content">
        <p className="eyebrow">Small prompts. More confidence.</p>
        <h1 id="hero-title">Start speaking earlier and with more confidence.</h1>
        <p className="hero__summary">
          Practise with thoughtful prompts made for language learners. Pick a language, choose an activity, and say something.
        </p>
        <div className="hero__actions">
          <a className="button button--primary button--hero" href="#activities">
            Start speaking confidently
          </a>
          <a className="button button--outlined button--hero" href="#activities">
            Explore Activities
          </a>
        </div>
      </div>
    </section>
  );
}

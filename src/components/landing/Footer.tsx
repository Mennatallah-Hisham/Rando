import Image from "next/image";
import lineFourteen from "../../../Assets/Illustrations/line-14.svg";
import lineSix from "../../../Assets/Illustrations/line-6.svg";
import lineNine from "../../../Assets/Illustrations/line-9.svg";
import logo from "../../../Assets/brand/Rando Logo - Transparent.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta footer__cta--blue">
        <Image src={lineFourteen} alt="" aria-hidden="true" className="footer__flourish footer__flourish--one" />
        <Image src={lineSix} alt="" aria-hidden="true" className="footer__flourish footer__flourish--two" />
        <Image src={lineNine} alt="" aria-hidden="true" className="footer__flourish footer__flourish--three" />
        <div className="container footer__cta-content">
          <h2>You do not have to feel ready to start.</h2>
          <p>Pick a language. Get a prompt. Start speaking. Your speaking journey starts with one small step.</p>
          <a className="button button--light" href="#activities">Start speaking for free</a>
          <span className="footer__subtext">Three free prompt shuffles every day.</span>
        </div>
      </div>
      <div className="footer__base">
        <div className="container footer__base-content footer__base-content--expanded">
          <div className="footer__brand">
            <a href="#top" aria-label="Speak Rando home"><Image src={logo} alt="Rando" className="footer__logo" /></a>
            <p>Less overthinking. More speaking.</p>
          </div>
          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#activities">Activities</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#activities">Start speaking confidently</a>
          </nav>
          <a className="footer__email" href="mailto:speakrando@gmail.com">speakrando@gmail.com</a>
          <p className="footer__copyright">© 2026 Speak Rando. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

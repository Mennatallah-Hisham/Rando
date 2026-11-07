import Image from "next/image";
import logo from "../../../Assets/brand/Rando Logo - Transparent.svg";
import { navigationItems } from "./data";

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Speak Rando home">
          <Image src={logo} alt="Rando" priority className="brand__logo" />
        </a>
        <div className="site-nav__links">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="site-nav__actions">
          <a className="button button--outlined site-nav__login" href="/login">Log in</a>
          <a className="button button--primary site-nav__cta" href="#activities">
            Start speaking confidently
          </a>
        </div>
      </nav>
    </header>
  );
}

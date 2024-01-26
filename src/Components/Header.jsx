import { ArrowIcon, HeartIcon, InstagramLogo, MessageIcon } from "./Iconos";
import "./header.css";
export function Header() {
  return (
    <>
      <header className="main-header">
        <ul className="header-list">
          <li className="header__item">
            <a href="#" className="header__link">
              <InstagramLogo />
              <ArrowIcon />
            </a>
          </li>
          <section className="notifications">
            <li className="header__item">
              <a href="#" className="header__link">
                <HeartIcon />
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                <MessageIcon />
              </a>
            </li>
          </section>
        </ul>
      </header>
    </>
  );
}

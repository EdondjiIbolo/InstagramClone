import { AddIcon, HeartIcon, HomeIcon, MediaIcon, SearchIcon } from "./Iconos";
import "./footer.css";
export function Footer() {
  return (
    <>
      <footer className="main-footer">
        <ul className="footer-list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              <HomeIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <SearchIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <AddIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <MediaIcon />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <HeartIcon />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

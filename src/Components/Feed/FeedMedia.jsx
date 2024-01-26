import imgFeed from "../../assets/imgclonIg.jpg";
import { ComentIcon, DotIcon, HeartIcon, SaveIcon, ShareIcon } from "../Iconos";
import "./feeditem.css";
export function MediaPlayer() {
  return (
    <section className="feed">
      <header className="feed__header">
        <section className="feed__user">
          <picture className="header__img">
            <div className="gradient"></div>
            <img src={imgFeed} alt="Profile img" />
          </picture>
          <div>
            <p className="username">mister_calderia</p>
          </div>
        </section>
        <div>
          <DotIcon />
        </div>
      </header>
      <div className="palyer__item">
        <img src={imgFeed} alt="feed item" />
      </div>
      <footer className="feed-footer">
        <ul className="feed-footer__list-left">
          <li className="feed-footer__item">
            <HeartIcon />
          </li>
          <li className="feed-footer__item">
            <ComentIcon />
          </li>
          <li className="feed-footer__item">
            <ShareIcon />
          </li>
        </ul>
        <li className="feed-footer__item">
          <SaveIcon />
        </li>
      </footer>
      <section className="feed-detail">
        <span className="feed__likes">1230 Me gusta</span>
        <div className="feed__description">
          <div className="description__post">
            <span className="feed__user-description">
              <strong> mister_calderia </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit
              amet consectetur adipisicing elit. ipsum dolor sit amet
              consectetur adipisicing elit. ipsum dolor sit amet consectetur
              adipisicing elit.
            </span>
          </div>
          <div>
            <span>Hace un dia</span>
          </div>
        </div>
      </section>
    </section>
  );
}

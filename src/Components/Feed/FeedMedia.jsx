import { useEffect, useState } from "react";
import imgFeed from "../../assets/imgclonIg.jpg";
import { ComentIcon, DotIcon, HeartIcon, SaveIcon, ShareIcon } from "../Iconos";
import "./feeditem.css";
export function MediaPlayer() {
  const [MyClass, setMyClass] = useState("description__post");
  const [click, setClick] = useState(false);
  const initialText =
    "La vida es como un lienzo en blanco, depende de ti cómo llenarlo de colores y emociones.  ¡Sé valiente, sé auténtico y aprovecha cada oportunidad que se te presente!";
  const [text, setText] = useState(initialText);
  const textLenght = initialText.length;

  useEffect(() => {
    if (textLenght > 25) {
      setMyClass("description__post description__post-overflow ");
      setText(`${text.slice(0, 15)}...`);
    }
  }, [textLenght]);

  const handleClick = () => {
    setText(initialText);
    console.log(initialText);
    setMyClass(`${MyClass} description__post--show`);
  };
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
      <div className="player__item">
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
          <div className={MyClass}>
            <span className="feed__user-description">
              <strong> mister_calderia </strong>
              {text}
              {textLenght > 25 && (
                <span className="text-grey" onClick={handleClick}>
                  Ver mas
                </span>
              )}
            </span>
          </div>
        </div>
        <div>
          <span className="feed__time">Ver los 3 comentarios</span>
        </div>
        <div className="feed__time">
          <span className="feed__time--text">Hace un dia </span>
          <div className="circle"></div>
          <span className="text-white">Ver traduccion</span>
        </div>
      </section>
    </section>
  );
}

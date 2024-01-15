import img from "../../assets/imgclonIg.jpg";
export function History() {
  return (
    <article className="history__item">
      <picture>
        <div className="gradient"></div>
        <img src={img} alt="user img" />
      </picture>

      <p>wendyesarasasasas</p>
    </article>
  );
}

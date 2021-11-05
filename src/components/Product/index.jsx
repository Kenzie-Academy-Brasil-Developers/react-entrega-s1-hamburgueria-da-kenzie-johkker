import "./style.css";

function ProductCard({ burgers, addToCart }) {
  const { id, name, price, img, category } = burgers;
  const fixedPrice = price.toFixed(2);
  console.log(id);

  return (
    <>
      <div className="card__image__container">
        <img className="card__image" src={img} alt={name} />
      </div>
      <div className="card__info">
        <span className="card__info--name">{name}</span>
        <span className="card__info--category">{category}</span>
        <span className="card__info--price">R${fixedPrice}</span>
        <div className="card__button--container">
          <button
            className="card__button"
            type="button"
            onClick={() => addToCart(id)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

import ProductCard from "../Product";
import "./style.css";

function ListaProdutos({ filteredProducts, addToCart }) {
  console.log(filteredProducts);

  return (
    <>
      <ul className="App__list">
        {filteredProducts.map((item) => (
          <li key={item.id} className="App__list__cards">
            {/*<ProductCard burgers={item} addToCart={addToCart} />*/}
            <div className="card__image__container">
              <img className="card__image" src={item.img} alt={item.name} />
            </div>
            <div className="card__info">
              <span className="card__info--name">{item.name}</span>
              <span className="card__info--category">{item.category}</span>
              <span className="card__info--price">
                R${item.price.toFixed(2)}
              </span>
              <div className="card__button--container">
                <button
                  className="card__button"
                  type="button"
                  onClick={() => addToCart(item.id)}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaProdutos;

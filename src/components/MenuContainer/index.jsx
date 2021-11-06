import ProductCard from "../Product/index.jsx";
import "./style.css";

function ListaProdutos({ filteredProducts, addToCart }) {
  console.log(filteredProducts);

  return (
    <>
      <ul className="App__list">
        {filteredProducts.map((item) => (
          <li key={item.id} className="App__list__cards">
            <ProductCard burgers={item} addToCart={addToCart} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaProdutos;

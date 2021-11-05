import ProductCard from "../Product";
import "./style.css";

function ListaProdutos({ filteredProducts, addToCart }) {
  return (
    <>
      <ul className="App__list">
        {filteredProducts.map((items) => (
          <li key={items.id} className="App__list__cards">
            <ProductCard filteredProducts={items} addToCart={addToCart} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaProdutos;

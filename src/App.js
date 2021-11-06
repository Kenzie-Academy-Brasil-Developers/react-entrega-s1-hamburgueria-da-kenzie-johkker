import { useState } from "react";
import "./App.css";
import ListaProdutos from "./components/MenuContainer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Mc-Shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userInput, setUserInput] = useState("");

  const filterProducts = (userInput) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.category.toLowerCase() === userInput.toLowerCase() ||
          product.name.toLowerCase() === userInput.toLowerCase() ||
          userInput === ""
      )
    );
  };

  const addToCart = (id) => {
    const selectedProduct = products.find((element) => element.id === id);
    if (!currentSale.includes(selectedProduct)) {
      setCurrentSale([...currentSale, selectedProduct]);
    }
  };

  const removeItem = (id) => {
    setCurrentSale(currentSale.filter((element) => element.id !== id));
  };
  const removeAll = () => {
    setCurrentSale([]);
  };

  return (
    <>
      <header className="App__header">
        <p className="App__header--text">
          <span className="burger">Burger</span>{" "}
          <span className="kenzie">Kenzie</span>
        </p>
        <div className="App__header--form">
          <input
            className="App__header--input"
            type="text"
            placeholder="Categoria ou Nome"
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
          <button
            className="App__header--button"
            onClick={() => filterProducts(userInput)}
          >
            Pesquisar
          </button>
        </div>
      </header>
      <div className="App__menu">
        <ListaProdutos
          filteredProducts={filteredProducts}
          addToCart={addToCart}
        />
      </div>
      <div className="App__cart">
        <div className="cart__title">Carrinho de Compras</div>
        <ShoppingCart
          className="cart__display"
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeItem={removeItem}
          removeAll={removeAll}
          setCartTotal={setCartTotal}
        />
      </div>
    </>
  );
}

export default App;

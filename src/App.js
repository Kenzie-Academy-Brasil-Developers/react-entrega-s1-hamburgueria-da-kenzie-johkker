import { useState } from "react";
import "./App.css";
import ListaProdutos from "./components/MenuContainer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([
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
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
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
          product.category === userInput || product.name === userInput
      )
    );
  };

  const addToCart = (id) => {
    const selectedProduct = products.find((element) => element.id === id);
    console.log(selectedProduct);
    console.log(currentSale);
    currentSale.includes(id)
      ? setCurrentSale([...currentSale])
      : setCurrentSale([...currentSale, selectedProduct]);
    currentSale.length === 0 ? setCurrentSale([...currentSale]) : updateCart();
  };

  const updateCart = () => {
    setCartTotal(currentSale.reduce((a, b) => a.price + b.price));
  };
  const removeItem = (id) => {
    setCurrentSale(currentSale.filter((element) => element.id !== id));
  };
  const removeAll = () => {
    setCurrentSale([]);
    updateCart();
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
        <div>Carrinho de Compras</div>
      </div>
    </>
  );
}

export default App;

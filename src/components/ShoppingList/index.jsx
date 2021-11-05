import "./style.css";

export const EmptyList = () => {
  return (
    <div className="empty__list">
      <h2 className="empty__list--info">Sua sacola está vazia!</h2>
      <h3 className="empty__list--subInfo">Adicione itens.</h3>
    </div>
  );
};

export const List = ({
  setCartTotal,
  currentSale,
  cartTotal,
  removeItem,
  removeAll,
}) => {
  const totalPrice = currentSale.reduce((previousValue, nextValue) => {
    return previousValue + nextValue.price;
  }, 0);

  setCartTotal(totalPrice);
  return (
    <div className="cart__container">
      <ul className="list">
        {currentSale.map((item, index) => (
          <li key={index} className="list__items">
            <img
              src={item.img}
              alt={item.name}
              className="list__items__img"
            ></img>
            <div className="list__items__text">
              <h2 className="list__items__text--name">{item.name}</h2>
              <h3 className="list__items__text--price">{item.price}</h3>
            </div>

            <button
              className="list__items__remove"
              onClick={() => removeItem(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="cart__total">
        <span>Total</span>
        <span>{`R$${cartTotal}`}</span>
      </div>
      <button className="removeAllButton" onClick={removeAll}>
        Remover tudo
      </button>
    </div>
  );
};

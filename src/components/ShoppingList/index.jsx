import "./style.css";

export const EmptyList = () => {
  return (
    <div className="empty__list">
      <h2 className="empty__list--info">Sua sacola está vazia!</h2>
      <h3 className="empty__list--subInfo">Adicione itens.</h3>
    </div>
  );
};

export const List = ({ currentSale, cartTotal, removeItem, removeAll }) => {
  const { id, name, price, img } = currentSale;
  return (
    <div className="cart__container">
      <ul className="list">
        {currentSale.map(() => (
          <li key={id} className="list__items">
            <img src={img} alt={name} className="list__items__img"></img>
            <div className="list__items__text">
              <h2 className="list__items__text--name">{name}</h2>
              <h3 className="list__items__text--price">{price}</h3>
            </div>
            <div className="cart__total">
              <span>Total</span>
              <span>{`R$${cartTotal}`}</span>
            </div>
            <button
              className="list__items__remove"
              onClick={() => removeItem(id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <button className="removeAllButton" onClick={removeAll}>
        Remover tudo
      </button>
    </div>
  );
};

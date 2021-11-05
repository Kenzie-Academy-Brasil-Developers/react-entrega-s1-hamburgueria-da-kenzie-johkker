import "./style.css";
import { EmptyList, List } from "../ShoppingList";

function ShoppingCart({
  setCartTotal,
  currentSale,
  cartTotal,
  removeItem,
  removeAll,
}) {
  return (
    <>
      {currentSale.length === 0 ? (
        <EmptyList />
      ) : (
        <List
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeItem={removeItem}
          removeAll={removeAll}
          setCartTotal={setCartTotal}
        />
      )}
    </>
  );
}

export default ShoppingCart;

import "./style.css";
import { EmptyList, List } from "../ShoppingList";

function ShoppingCart({ currentSale, cartTotal, removeItem, removeAll }) {
  currentSale.length === 0 ? (
    <EmptyList />
  ) : (
    <List
      currentSale={currentSale}
      cartTotal={cartTotal}
      removeItem={removeItem}
      removeAll={removeAll}
    />
  );
}

export default ShoppingCart;

import CartItem from "./CartItem";
import "../styles/Cart.css";
import { useContext } from "react";
import StoreContext from "../../products/context/storeContext";

const Cart = () => {
  // getting the cart from the global context
  const { cart } = useContext(StoreContext);

  // compute the total cart price
  const computeCartTotal: () => number = () => {
    let sum = 0;
    cart.forEach((cartItem) => (sum += cartItem.quantity * cartItem.price));
    return sum;
  };

  return (
    <>
      <div className="cart">
        {cart.length === 0 && (
          <h2 className="error">No products were added to the cart</h2>
        )}
        {cart.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      {cart.length !== 0 && (
        <h2 className="total" style={{ position: "sticky", bottom: 0 }}>
          Your Total Is: ${computeCartTotal()}
        </h2>
      )}
    </>
  );
};

export default Cart;

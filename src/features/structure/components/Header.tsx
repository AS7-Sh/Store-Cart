import { useState, useContext } from "react";
import Modal from "../../../common/components/Modal";
import Cart from "../../cart/components/Cart";
import StoreContext from "../../products/context/storeContext";
import "../styles/Header.css";

/**
 * The application header that manage the cart icon by clicking on it
 */

const Header = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const { cart, handlePurchaseCart } = useContext(StoreContext);

  return (
    <header>
      <h1>
        OSOSS<sup>TM</sup>
      </h1>
      <section>
        <i
          className="las la-shopping-cart"
          onClick={() => setCartOpened(!cartOpened)}
        />
      </section>
      {cartOpened && (
        <Modal
          heading="Cart Items"
          submitText="Purchase"
          disabledSubmit={cart.length === 0}
          onClose={() => setCartOpened(false)}
          onSubmit={() => {
            handlePurchaseCart();
            setCartOpened(false);
            alert("Your cart items were purchases successfully");
          }}
        >
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default Header;

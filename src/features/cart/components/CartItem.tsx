import { useContext } from "react";
import { Product } from "../../products/hooks/storeHook";
import product from "../../../assets/images/iphone.jpg";
import StoreContext from "../../products/context/storeContext";

//displaying single cart item
const CartItem = ({ cartItem }: { cartItem: Product }) => {
  // getting handlers from the context
  const { handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem } =
    useContext(StoreContext);

  return (
    <div className="product-card cart-item">
      <i
        className="las la-trash-alt delete"
        onClick={() => handleRemoveItem(cartItem.id)}
      />

      <div className="image-container">
        <img
          src={
            cartItem.images && cartItem.images.length
              ? cartItem.images[0]
              : product
          }
          alt="product-img"
        />
      </div>
      <div className="content-container">
        <h3>{cartItem.title}</h3>
        <section>
          <h2>{cartItem.price * cartItem.quantity}$</h2>
          <span className="bought">{cartItem.quantity}</span>
        </section>
        <div className="button-container">
          <button onClick={() => handleDecreaseQuantity(cartItem.id)}>-</button>
          <button onClick={() => handleIncreaseQuantity(cartItem.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

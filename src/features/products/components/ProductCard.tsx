import { useContext } from "react";
import { Product } from "../hooks/storeHook";
import dummyImage from "../../../assets/images/iphone.jpg";
import StoreContext from "../context/storeContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // getting cart and handler from the context
  const { cart, handleAddToCart } = useContext(StoreContext);

  // checking if the product is currently in the cart
  const productAdded =
    cart.findIndex((cartItem) => cartItem.id === product.id) !== -1;

  // deciding the product status
  const productStatus = productAdded
    ? product.status
    : !product.status
    ? "normal"
    : product.status;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          loading="lazy"
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : dummyImage
          }
          alt={product.title}
        />
      </div>
      <div className="content-container">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <section>
          <h2>${product.price}</h2>
          <span className={productStatus}>{productStatus}</span>
        </section>
        <div
          className="button-container"
          onClick={() => handleAddToCart(product)}
        >
          <button disabled={productAdded}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

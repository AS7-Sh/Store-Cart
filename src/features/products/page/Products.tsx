import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import StoreContext from "../context/storeContext";
import "../styles/Products.css";
import Pagination from "../../../common/components/Pagination";

// The main products page

const Products = () => {
  const { products, handleNext, handlePrev } = useContext(StoreContext);

  return (
    <>
      <div className="products-page">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination onPrev={handlePrev} onNext={handleNext} />
    </>
  );
};

export default Products;

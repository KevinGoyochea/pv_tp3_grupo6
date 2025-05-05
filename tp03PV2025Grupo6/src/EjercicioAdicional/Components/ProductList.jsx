import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productos }) => {
  return (
    <div className="product-list">
      {productos.map((producto, index) => (
        <ProductItem key={index} producto={producto} />
      ))}
    </div>
  );
};

export default ProductList;

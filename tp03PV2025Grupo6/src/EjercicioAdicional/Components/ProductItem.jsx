import React from "react";

const ProductItem = ({ producto }) => {
  return (
    <div className="product-item">
      <span>Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}</span>
    </div>
  );
};

export default ProductItem;

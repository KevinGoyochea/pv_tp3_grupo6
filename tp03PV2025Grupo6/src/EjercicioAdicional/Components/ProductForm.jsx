import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim() && precio > 0) {
      addProduct({ descripcion, precio: parseFloat(precio) });
      setDescripcion("");
      setPrecio("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción del producto"
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;

import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import ProductForm from "./Components/ProductForm";

const App = () => {
  const [productos, setProductos] = useState([
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Impresora", precio: 85000 }
  ]);

  const addProduct = (producto) => {
    setProductos([...productos, producto]);
  };

  const filterProducts = () => {
    setProductos(productos.filter(producto => producto.precio > 20000));
  };

  const productsWithIVA = () => {
    setProductos(productos.map(producto => ({
      ...producto,
      precio: producto.precio * 1.21
    })));
  };

  const sortProducts = () => {
    setProductos([...productos].sort((a, b) => a.precio - b.precio));
  };

  const removeCheapestProduct = () => {
    const precioMinimo = Math.min(...productos.map(p => p.precio));
    setProductos(productos.filter(producto => producto.precio !== precioMinimo));
  };

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>
      <ProductForm addProduct={addProduct} />
      <h2>Lista de Productos:</h2>
      <ProductList productos={productos} />
      <button onClick={filterProducts}>Filtrar ({'>'} $20K)</button>
      <button onClick={productsWithIVA}>Aplicar IVA (21%)</button>
      <button onClick={sortProducts}>Ordenar por Precio</button>
      <button onClick={removeCheapestProduct}>Eliminar más barato</button>
    </div>
  );
};

export default App;

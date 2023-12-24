import React, { useState } from "react";
import newProduct from "../data/newProduct";

const AddProduct = ({onAdd}) => {
  const [productName, setProductName] = useState(newProduct.product_name)
  const [productPrice, setProductPrice] = useState(newProduct.Price)

  const handleAdd = () => {
    if (productName && productPrice) {
      onAdd({ product_name: productName, Price: productPrice });
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default AddProduct;
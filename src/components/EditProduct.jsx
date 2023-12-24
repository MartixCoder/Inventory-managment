import React, { useState, useEffect } from "react";

const EditProduct = ({product, onSave, onCancel}) => {
  const [productName, setProductName] = useState(product.product_name);
  const [productPrice, setProductPrice] = useState(product.Price);

  useEffect(() => {
    setProductName(product.product_name);
    setProductPrice(product.Price);
  }, [product]);

  const handleSave = () => {
    onSave({...product, product_name: productName,Price: productPrice});
  };

  return (
    <div>
      <h2>Edit Product</h2>
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
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditProduct;
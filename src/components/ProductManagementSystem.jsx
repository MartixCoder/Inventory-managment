import React, { useState } from "react";
import data from '../data/product';
import newData from '../data/newProduct'

const ProductManagementSystem = () => {
  const [products, setProducts] = useState(data);

  const [newProduct, setNewProduct] = useState(newData);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setProducts([...products, {id: products.length + 1, ...newProduct}]);
    setNewProduct(newData);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
    setNewProduct({name: productToEdit.name, price: productToEdit.price});
  };

  const handleUpdateProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingProduct.id
          ? {...product, product_name: newProduct.product_name, Price: newProduct.Price, Category: newProduct.Category}
          : product
      )
    );
    setEditingProduct(null);
    setNewProduct(newData);
  };

  return (
    <div>
      <h2>Product Management System</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.product_name} - {product.Price}TK - {product.Category}
            <button onClick={() => handleEditProduct(product.id)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
        <label>
          Name:
          <input
            type="text"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({...newProduct, product_name: e.target.value})
            }
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={newProduct.Price}
            onChange={(e) =>
              setNewProduct({...newProduct, Price: e.target.value})
            }
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={newProduct.Category}
            onChange={(e) =>
              setNewProduct({...newProduct, Category: e.target.value})
            }
          />
        </label>
        {editingProduct ? (
          <button onClick={handleUpdateProduct}>Update Product</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>
    </div>
  );
};

export default ProductManagementSystem;
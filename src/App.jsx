import React, {useState} from "react";
import InventoryList from "./components/InventoryList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import data from "./data/product"
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState(data);
  const [editingProduct, setEditingProduct] = useState("");

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <>
      <Navbar />
      <AddProduct />
      {/* <div>
        {editingProduct ? (
          <EditProduct
            product={editingProduct}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <div>
            <AddProduct onAdd={handleAddProduct} />
            <InventoryList
              products={products}
              onDelete={handleDeleteProduct}
              onEdit={handleEditProduct}
            />
          </div>
        )}
      </div> */}
    </>
  );
};

export default App;
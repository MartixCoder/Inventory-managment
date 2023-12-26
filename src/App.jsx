import {useState} from "react";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import InventoryList from "./components/InventoryList";
import data from "./data/data";
import EditProduct from "./components/EditProduct";

const App = () => {
  const [products, setProducts] = useState(data);
  const [editingProduct, setEditingProduct] = useState(null);

  // this add product funtion
  const handleAddProduct = (newProduct) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        product_name: newProduct.product_name,
        category: newProduct.category,
        brand: newProduct.brand,
        price: newProduct.price,
        quantity: newProduct.quantity,
        unit: newProduct.unit,
        creator: newProduct.creator,
      },
    ]);
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

  // this product id delate funtion
  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <>
      <Navbar />
      <div>
        {editingProduct ? (
          <div>
            <EditProduct
              product={editingProduct}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          </div>
        ) : (
          <div>
            <div>
              <AddProduct onAdd={handleAddProduct} />
            </div>
            <InventoryList
              data={products}
              onDelete={handleDelete}
              onEdit={handleEditProduct}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;

import {useState} from "react";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import InventoryList from "./components/InventoryList";
import data from "./data/data";

const App = () => {
  const [products, setProducts] = useState(data);

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

  // this product id delate funtion
  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  }

  const handleEdit = ()=> {}
  return (
    <>
      <Navbar />
      <AddProduct onAdd={handleAddProduct}/>
      <InventoryList data={products} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  );
};

export default App;

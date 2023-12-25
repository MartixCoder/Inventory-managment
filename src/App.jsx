import {useState} from "react";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import InventoryList from "./components/InventoryList";
import data from "./data/data";

const App = () => {
  const [products, setProduct] = useState(data);

  // this product id delate funtion
  const handleDelete = (productId) => {
    setProduct(products.filter((p) => p.id !== productId));
  }
  
  const handleEdit = ()=> {}
  return (
    <>
      <Navbar />
      <AddProduct />
      <InventoryList data={products} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  );
};

export default App;

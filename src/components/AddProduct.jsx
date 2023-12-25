import React, {useState} from "react";
import newProduct from "../data/newProduct";

const AddProduct = ({onAdd}) => {
  const [productName, setProductName] = useState(newProduct.product_name);
  const [productBrand, setProductBrand] = useState(newProduct.Brand);
  const [productPrice, setProductPrice] = useState(newProduct.Price);

  const handleAdd = () => {
    if (productName && productPrice) {
      onAdd({
        product_name: productName,
        Price: productPrice,
        Brand: productBrand,
      });
      setProductName("");
      setProductPrice("");
      setProductBrand("");
    }
  };

  return (
    <>
      <div className="container-xxl">
        <div class="bg-body-secondary">
          <div className=" container-fluid text-center p-3">
            <h3 className="h3">Add Product Sistem</h3>
          </div>
          <div class="container-fluid p-3">
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Product Name:</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose Brand:</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>Agro Limited</option>
                  <option>Singenta</option>
                  <option>Bashundhara</option>
                  <option>Alfa Group</option>
                </select>
              </div>
              <div className="col-6">
                <label for="inputAddress" className="form-label">
                  Choose Category:
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>Fertilizer</option>
                  <option>Poison</option>
                  <option>Cement</option>
                  <option>Seed</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Choose Price:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="price"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Quantity:</label>
                <input type="number" class="form-control"></input>
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  Choose Unit:
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>PC/Windows</option>
                  <option>Laptop/mac</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Creator:</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>Administer</option>
                  <option>Manager</option>
                  <option>Client</option>
                </select>
              </div>
              <div className="col-12 text-sm-center">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

{
  /* <div>
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
            Price:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
          <label>
            Brand:
            <select
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
            >
              <option value=""></option>
              <option value="Singenta">Singenta</option>
              <option value="AGRO-LMT">AGRO LMT</option>
              <option value="Bshundhora">Bshundhora</option>
              <option value="Amen-Group">Amen Group</option>
            </select>
          </label>
          <button onClick={handleAdd}>Add Product</button>
  </div> */
}

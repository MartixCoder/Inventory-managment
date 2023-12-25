import React, { useState, useEffect } from "react";

const EditProduct = ({product, onSave, onCancel}) => {
  // const [productName, setProductName] = useState(product.product_name);
  // const [productPrice, setProductPrice] = useState(product.Price);

  // useEffect(() => {
  //   setProductName(product.product_name);
  //   setProductPrice(product.Price);
  // }, [product]);

  // const handleSave = () => {
  //   onSave({...product, product_name: productName,Price: productPrice});
  // };

  return (
    <>
      <div className="container-xxl">
        <div class="bg-body-secondary">
          <div className=" container-fluid text-center p-3">
            <h3 className="h3">Update Product Sistem</h3>
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
                <button type="submit" className="btn btn-primary me-3">
                  Update Product
                </button>
                <button type="submit" className="btn btn-primary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <h2>Edit Product</h2>
    //   <label>
    //     Product Name:
    //     <input
    //       type="text"
    //       value={productName}
    //       onChange={(e) => setProductName(e.target.value)}
    //     />
    //   </label>
    //   <label>
    //     Quantity:
    //     <input
    //       type="number"
    //       value={productPrice}
    //       onChange={(e) => setProductPrice(e.target.value)}
    //     />
    //   </label>
    //   <button onClick={handleSave}>Save Changes</button>
    //   <button onClick={onCancel}>Cancel</button>
    // </div>
  );
};

export default EditProduct;
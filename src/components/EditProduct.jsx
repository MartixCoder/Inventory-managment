import React, { useState, useEffect } from "react";

const EditProduct = () => {

  return (
    <>
      <div className="container-xxl">
        <div className="bg-body-secondary">
          <div className=" container-fluid text-center p-3">
            <h3 className="h3">Add Product Sistem</h3>
          </div>
          <div className="container-fluid p-3">
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Product Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="product_name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose Brand:</label>
                <select
                  className="form-select"
                  name="brand"
                >
                  <option selected>Choose...</option>
                  <option>Agro Limited</option>
                  <option>Singenta</option>
                  <option>Bashundhara</option>
                  <option>Alfa Group</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Choose Category:</label>
                <select
                  className="form-select"
                  name="category"
                >
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
                  placeholder="Price"
                  name="price"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Unit:</label>
                <select
                  className="form-select"
                  name="unit"
                >
                  <option selected>Choose...</option>
                  <option>PC/Windows</option>
                  <option>Laptop/mac</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Creator:</label>
                <select
                  className="form-select"
                  name="creator"
                >
                  <option selected>Choose...</option>
                  <option>Administer</option>
                  <option>Manager</option>
                  <option>Client</option>
                </select>
              </div>
              <div className="col-12 text-sm-center">
                <button className="btn btn-primary">
                  Add Product
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
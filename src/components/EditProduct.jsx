import React, {useEffect, useState} from "react";

const EditProduct = ({product, onSave, onCancel}) => {
  const [updateProduct, setUpdateProduct] = useState({...product,
    product_name: product.product_name,
    category: product.category,
    brand: product.brand,
    price: product.price,
    quantity: product.quantity,
    unit: product.unit,
    creator: product.creator,
  });

  useEffect(() => {
    setUpdateProduct({
      ...product,
      product_name: product.product_name,
      category: product.category,
      brand: product.brand,
      price: product.price,
      quantity: product.quantity,
      unit: product.unit,
      creator: product.creator,
    });
  }, [product]);

  const handleUpdateChange = (e) => {
    const {name, value} = e.target;
    setUpdateProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave({
      ...product,
      product_name: updateProduct.product_name,
      category: updateProduct.category,
      brand: updateProduct.brand,
      price: updateProduct.price,
      quantity: updateProduct.quantity,
      unit: updateProduct.unit,
      creator: updateProduct.creator,
    });
  };

  return (
    <>
      <div className="container-xxl">
        <div className="bg-body-secondary">
          <div className=" container-fluid text-center p-3">
            <h3 className="h3">Update Product Sistem</h3>
          </div>
          <div className="container-fluid p-3">
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Product Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="product_name"
                  value={updateProduct.product_name}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose Brand:</label>
                <select
                  className="form-select"
                  name="brand"
                  value={updateProduct.brand}
                  onChange={handleUpdateChange}
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
                  value={updateProduct.category}
                  onChange={handleUpdateChange}
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
                  value={parseInt(updateProduct.price)}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Quantity:</label>
                <input type="number" className="form-control" name="quantity" value={parseInt(updateProduct.quantity)} onChange={handleUpdateChange}/>
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Unit:</label>
                <select className="form-select" name="unit" value={updateProduct.unit} onChange={handleUpdateChange}>
                  <option selected>Choose...</option>
                  <option>PC</option>
                  <option>Laptop</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Creator:</label>
                <select className="form-select" name="creator" value={updateProduct.creator} onChange={handleUpdateChange}>
                  <option selected>Choose...</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Client</option>
                </select>
              </div>
              <div className="col-12 text-sm-center">
                <button className="btn btn-primary me-3" onClick={handleSave}>
                  Update Product
                </button>
                <button className="btn btn-primary" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;

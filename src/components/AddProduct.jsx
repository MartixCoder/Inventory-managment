import {useState} from "react";
import newData from "../data/formData";

const AddProduct = ({onAdd}) => {
  const [formData, setFormData] = useState(newData);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      product_name: formData.product_name,
      category: formData.category,
      brand: formData.brand,
      price: formData.price,
      quantity: formData.quantity,
      unit: formData.unit,
      creator: formData.creator,
    });
    setFormData({
      id: "",
      product_name: "",
      category: "",
      brand: "",
      price: "",
      unit: "",
      quantity: "",
      creator: "",
    });
  };

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
                  value={formData.product_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose Brand:</label>
                <select
                  className="form-select"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
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
                  value={formData.category}
                  onChange={handleChange}
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
                  value={parseInt(formData.price)}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={parseInt(formData.quantity)}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Unit:</label>
                <select
                  className="form-select"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                >
                  <option selected>Choose...</option>
                  <option>PC</option>
                  <option>Laptop</option>
                  <option>Phone</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Choose Creator:</label>
                <select
                  className="form-select"
                  name="creator"
                  value={formData.creator}
                  onChange={handleChange}
                >
                  <option selected>Choose...</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Client</option>
                </select>
              </div>
              <div className="col-12 text-sm-center">
                <button className="btn btn-primary" onClick={handleSubmit}>
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

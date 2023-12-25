const InventoryList = ({data, onDelete, onEdit}) => {
  return (
    <div className="container-xxl mb-5">
      <div className="container-fluid">
        <div className="table-responsive">
          <h2 className=" text-center mb-3 mt-3">Inventory List</h2>
          <table className="table align-middle">
            <thead className=" text-center">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit</th>
                <th scope="col">Created_by</th>
                <th scope="col">####</th>
              </tr>
            </thead>
            <tbody className=" align-middle text-center">
              {data.map((product) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <th>{product.product_name}</th>
                  <th>{product.category}</th>
                  <th>{product.brand}</th>
                  <th>{product.price}TK</th>
                  <th>{product.quantity}</th>
                  <th>{product.unit}</th>
                  <th>{product.creator}</th>
                  <th>
                    <button className="btn btn-primary me-2" onClick={()=> onEdit(product)}>Edit</button>
                    <button className="btn btn-primary" onClick={()=> onDelete(product.id)}>Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
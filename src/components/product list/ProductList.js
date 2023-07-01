import React, { useState, useEffect } from 'react';
import './productList.css';
import AddProduct from './AddProduct';
import { fetchProducts, deleteProduct, updateProduct } from '../../API/api';

import { Link } from 'react-router-dom';
import EditModal from './EditModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const productsData = await fetchProducts();
    setProducts(productsData);
  };

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    fetchProductsData();
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditedProduct({ ...product });
  };

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await updateProduct(selectedProduct.id, editedProduct);
    fetchProductsData();
    handleEdit(null);
  };

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Edit product */}
      <EditModal
        show={Boolean(selectedProduct)}
        handleClose={() => handleEdit(null)}
        editedProduct={editedProduct}
        handleChange={handleChange}
        handleSave={handleSave}
      />

      {/* Add Product */}
      <AddProduct fetchProducts={fetchProductsData} />

      {/* Product Table */}
      <div className='table-container'>
  
      <table className='table'>
        <thead>
          <tr className='bg-info'>
            <th>Image</th>
            <th>Name</th>
            <th>Short Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image}  />
              </td>
              <td>{product.name}</td>
              <td>{product.shortDescription}</td>
              <td>₹ {product.price}</td>
              <td>
                <button
                  className='btn btn-warning mx-1'
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger mx-1'
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
               
                
                <Link to={"product-detail"} className='btn btn-primary mx-1'>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      {/* Pagination */}
      <ul className='pagination'>
        {Array(Math.ceil(products.length / productsPerPage))
          .fill()
          .map((_, index) => (
            <li key={index} className='page-item'>
              <button
                className='page-link'
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;

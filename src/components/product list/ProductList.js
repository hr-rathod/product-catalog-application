import React, { useState, useEffect } from 'react';
import "./productList.css"
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import AddProduct from './AddProduct';



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


 const [selectedProduct, setSelectedProduct] = useState("")


 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);


 const [value, setValue] = useState({})

 useEffect(() => {
  setValue({
      name: products.name,
      shortDescription: products.shortDescription,
      description: products.description,
      price: products.price,
      rating: products.rating,
      imgURL: products.imageURL
  })
}, [])



 const handleChange = (e) => {
  e.preventDefault();
  setValue({ ...value, [e.target.name]: e.target.value })
}


  return (
    <div>


{/* edit product */}


<div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>

                <form className='form-group'>
                    <Modal.Body>


                        <label for="name">Product Name</label>
                        <input
                            type='text'
                            id='name'
                            // value={selectedProduct.product.name}
                            className='form-control'
                            placeholder='Name'
                            onChange={handleChange}
                           
                        />

                        <label for="shortDescrip">Product Short Description</label>
                        <input
                        type='text'
                            id='shortDescrip'
                            className='form-control'
                            placeholder='Enter Short Description'
                            onChange={handleChange}
                        />

                        <label for="Descrip">Product Description</label>
                        <textarea
                        type='text'
                            id='Descrip'
                            className='form-control'
                            placeholder='Enter Description'
                            onChange={handleChange}
                           
                        />

                        <label for="price">Product Price</label>
                        <input
                            id='price'
                            className='form-control'
                            placeholder='Enter Price'
                            onChange={handleChange}
                            
                        />

                        <label for="img">Product Image URl</label>
                        <input
                            id='img'
                            className='form-control'
                            placeholder='Enter Image URl'
                           
                        />

                        <label for="rating">Product Rating</label>
                        <input
                            id='rating'
                            className='form-control'
                            placeholder='Enter Rating'
                          
                        />
                    </Modal.Body>
                    <Modal.Footer>
                       
                        <Button style={{width: "150px"}} variant="success" >
                            Add
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </div>










<AddProduct fetchProducts={fetchProducts}/>
      <table className=''>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Short Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className=''>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} /></td>
              <td className='px-3' style={{width: "200px", textAlign: "left"}}>{product.name}</td>
              <td className='px-3' style={{width: "300px", textAlign: "left"}}>{product.shortDescription}</td>
              <td>₹ {product.price}</td>
              <td>
                <button onClick={()=>setSelectedProduct({
                 product : product,
                 id : product.id
                },
            handleShow()
                  )}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={()=>{}}></button>
    </div>
  );
};

export default ProductList;

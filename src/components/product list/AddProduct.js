
import React, { useState, useEffect } from 'react';
import "./productList.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



function AddProduct(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURl] = useState("");
    const [rating, setRating] = useState("");


    const handleAddProduct = () => {
        console.log("Clicked")
        axios.post("http://localhost:3001/products/", {
            name: name,
            shortDescription: shortDescription,
            description: description,
            price: price,
            image: imageURL,
            rating: rating
        });

        props.fetchProducts()
        handleClose()

    };


    return (
        <>
    
        <Button className='modal-btn' variant="primary" onClick={handleShow}>
                Add New Product
            </Button>
        
       


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
                            className='form-control'
                            placeholder='Name'
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <label for="shortDescrip">Product Short Description</label>
                        <input
                        type='text'
                            id='shortDescrip'
                            className='form-control'
                            placeholder='Enter Short Description'
                            onChange={(e) => { setShortDescription(e.target.value) }}
                        />

                        <label for="Descrip">Product Description</label>
                        <textarea
                        type='text'
                            id='Descrip'
                            className='form-control'
                            placeholder='Enter Description'
                            onChange={(e) => { setDescription(e.target.value) }}
                        />

                        <label for="price">Product Price</label>
                        <input
                            id='price'
                            className='form-control'
                            placeholder='Enter Price'
                            onChange={(e) => { setPrice(e.target.value) }}
                        />

                        <label for="img">Product Image URl</label>
                        <input
                            id='img'
                            className='form-control'
                            placeholder='Enter Image URl'
                            onChange={(e) => { setImageURl(e.target.value) }}
                        />

                        <label for="rating">Product Rating</label>
                        <input
                            id='rating'
                            className='form-control'
                            placeholder='Enter Rating'
                            onChange={(e) => { setRating(e.target.value) }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                       
                        <Button style={{width: "150px"}} variant="success" onClick={handleAddProduct}>
                            Add
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </div>
        </>
      
            
      
    )
}

export default AddProduct
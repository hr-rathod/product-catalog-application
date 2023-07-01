import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditModal = ({ show, handleClose, editedProduct, handleChange, handleSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="name">Product Name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='form-control'
          value={editedProduct ? editedProduct.name : ''}
          placeholder='Name'
          onChange={handleChange}
        />

        <label htmlFor="shortDescrip">Product Short Description</label>
        <input
          type='text'
          id='shortDescrip'
          name='shortDescription'
          className='form-control'
          value={editedProduct ? editedProduct.shortDescription : ''}
          placeholder='Enter Short Description'
          onChange={handleChange}
        />

        <label htmlFor="Descrip">Product Description</label>
        <textarea
          type='text'
          id='Descrip'
          name='description'
          className='form-control'
          value={editedProduct ? editedProduct.description : ''}
          placeholder='Enter Description'
          onChange={handleChange}
        />

        <label htmlFor="price">Product Price</label>
        <input
          id='price'
          name='price'
          className='form-control'
          value={editedProduct ? editedProduct.price : ''}
          placeholder='Enter Price'
          onChange={handleChange}
        />

        <label htmlFor="img">Product Image URL</label>
        <input
          id='img'
          name='image'
          className='form-control'
          value={editedProduct ? editedProduct.image : ''}
          placeholder='Enter Image URL'
          onChange={handleChange}
        />

        <label htmlFor="rating">Product Rating</label>
        <input
          id='rating'
          name='rating'
          className='form-control'
          value={editedProduct ? editedProduct.rating : ''}
          placeholder='Enter Rating'
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ width: "150px" }} variant="success" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;

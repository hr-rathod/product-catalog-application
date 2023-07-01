import axios from 'axios';

const apiURL  = 'http://localhost:3001';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiURL }/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${apiURL }/products/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export const updateProduct = async (productId, updatedProduct) => {
  try {
    await axios.put(`${apiURL }/products/${productId}`, updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

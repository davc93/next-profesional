import axios from 'axios';
import endPoints from './index';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },

  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },

  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  await axios.delete(endPoints.products.deleteProduct(id));
};
export { addProduct, deleteProduct, updateProduct };

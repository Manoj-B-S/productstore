import axios from 'axios';
import type { Product } from '../types/Product';

const API_BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const response = await api.get('/products');
      return response.data.map((item: any) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
        inStock: true,
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  },

  getProductById: async (id: number): Promise<Product> => {
    try {
      const response = await api.get(`/products/${id}`);
      const item = response.data;
      return {
        id: item.id,
        name: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
        inStock: true,
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product');
    }
  },
};
"use server";
import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get(' https://api.escuelajs.co/api/v1/categories/2/products');
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
}

"use server";
import axios from "axios";
import { Products } from "@/data/products";
export async function getProducts() {
  try {
    const response = await axios.get(' https://api.escuelajs.co/api/v1/categories/2/products');
    //looks funny but i was just trying to explain how we can do this by an open source api also....
    return Products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
}

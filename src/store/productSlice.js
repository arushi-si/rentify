import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productCategories: [
      "Electrical Appliances",
      "Small Appliances",
      "Furniture",
    ],
    products: [
      {
        name: "Washing Machine",
        category: "Electrical Appliances",
        imageUrl:
          "https://images.unsplash.com/photo-1648627667032-d02d79b28066?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Bed",
        category: "Furniture",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1671269705768-cad27668134c?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sofa Chair",
        category: "Furniture",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1723874468810-3147a74bb3a7?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Refrigerator",
        category: "Small Appliances",
        imageUrl:
          "https://images.unsplash.com/photo-1721563927724-74b1a0ddef33?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Smart TV",
        category: "Small Appliances",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1664300327349-776651024d51?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sofa Set",
        category: "Furniture",
        imageUrl:
          "https://images.unsplash.com/photo-1693037197430-d537313da601?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    selectedProducts: [],
    selectedCategory: "All",
  },
  reducers: {
    SELECT_PRODUCT(state, action) {
      state.selectedProducts.push(action.payload);
    },
    INCREASE_COUNT(state, action) {
      const index = state.selectedProducts.findIndex(
        (item) => item.name === action.payload
      );
      state.selectedProducts[index].count += 1;
    },
    DECREASE_COUNT(state, action) {
      const index = state.selectedProducts.findIndex(
        (item) => item.name === action.payload
      );
      const productCount = state.selectedProducts[index].count - 1;

      if (productCount === 0) {
        state.selectedProducts = state.selectedProducts.filter(
          (item) => item.name !== action.payload
        );
        return;
      }

      state.selectedProducts[index].count -= 1;
    },
    SELECT_CATEGORY(state, action) {
      state.selectedCategory = action.payload;
    },
    RESET_SELECTED_PRODUCTS(state) {
      state.selectedProducts = [];
    },
    FORCE_UPDATE_SELECTED_PRODUCTS(state, action) {
      state.selectedProducts = action.payload ?? [];
    },
  },
});

export const {
  SELECT_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
  SELECT_CATEGORY,
  RESET_SELECTED_PRODUCTS,
  FORCE_UPDATE_SELECTED_PRODUCTS,
} = productSlice.actions;

export default productSlice.reducer;

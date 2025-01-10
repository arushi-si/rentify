import { createSlice } from "@reduxjs/toolkit";

const initialCategories = {
  Rooms: 0,
  Kitchen: 0,
  "Drawing Hall": 0,
  "Dinning Hall": 0,
};

const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomCategories: initialCategories,
    selectedRoomProducts: {},
  },
  reducers: {
    CATEGORY_INCREMENT(state, action) {
      state.roomCategories[action.payload] += 1;
    },
    CATEGORY_DECREMENT(state, action) {
      state.roomCategories[action.payload] -= 1;
    },
    SAVE_ROOM_CATEGORY(state, action) {
      const { title, selectedProducts } = action.payload;
      state.selectedRoomProducts[title] = selectedProducts;
    },
    RESET_ROOM_SLICE(state) {
      state.roomCategories = initialCategories;
      state.selectedRoomProducts = {};
    },
  },
});

export const {
  CATEGORY_DECREMENT,
  CATEGORY_INCREMENT,
  SAVE_ROOM_CATEGORY,
  RESET_ROOM_SLICE,
} = roomSlice.actions;

export default roomSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgImage: "https://www.teahub.io/photos/full/256-2563481_painting.jpg",
  fgImage: "https://i.ibb.co/4TpnGLb/image-1.png"
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    changeBgImage: (state, action) => {
      state.bgImage = action.payload;
    },
    changeFgImage: (state, action) => {
      state.fgImage = action.payload;
    }
  }
});

export const { changeBgImage, changeFgImage } = activeSlice.actions;

export default activeSlice.reducer;

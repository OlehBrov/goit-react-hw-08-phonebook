const { createSlice } = require('@reduxjs/toolkit');

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    setModal(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {},
  visible: false
};


const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    addHero: (state, { payload }) => {
      state.hero = payload
      state.visible = true
    },
    changeVisible: state => {
      const newState = {
        hero: {},
        visible: false
      }
      state.hero = newState.hero
      state.visible = newState.visible
    }
  }
});

export const { addHero, changeVisible } = heroSlice.actions;

export default heroSlice.reducer;
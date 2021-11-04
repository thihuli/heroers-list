import { configureStore } from '@reduxjs/toolkit';
import heroSlice from './slice/heroSlice';
import someHeroes from './slice/someHeroesSlice';

export const store = configureStore({
  reducer: {
    sameHeroes: someHeroes,
    hero: heroSlice
  },
});
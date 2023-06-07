import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import layeredImageReducer from '../features/layeredImage/layeredImageSlice';
import traitsReducer from '../features/traits/traitsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layeredImage: layeredImageReducer,
    traits: traitsReducer
  },
});

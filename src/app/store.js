import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import layeredImageReducer from '../features/layeredImage/layeredImageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layeredImage: layeredImageReducer
  },
});

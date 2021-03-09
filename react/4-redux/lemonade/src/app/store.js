import { configureStore } from '@reduxjs/toolkit';
import lemonadeReducer from '../features/lemonade/lemonadeSlice';

export default configureStore({
  reducer: {
    lemonade: lemonadeReducer,
  },
});

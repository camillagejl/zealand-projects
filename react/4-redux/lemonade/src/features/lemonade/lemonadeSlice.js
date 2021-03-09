import { createSlice } from '@reduxjs/toolkit';

export const lemonadeSlice = createSlice({
  name: 'lemonade',
  initialState: {
    price: {
      sell: 5,
      buy: 3,
    },
    stock: 10,
    balance: 0,
    sold: 0,
    bought: 0,
  },
  reducers: {
    sellLemonade: (state, action) => {
      const amount = action.payload;
      state.sold += amount;
      state.stock -= amount;
      state.balance += state.price.sell * amount;
    },
    buyStock: (state, action) => {
      const amount = action.payload;
      state.bought += amount;
      state.stock += amount;
      state.balance -= state.price.buy * amount;
    },
  },
});

export const { sellLemonade, buyStock } = lemonadeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStock = state => state.lemonade.stock;
export const selectBalance = state => state.lemonade.balance;
export const selectSellPrice = state => state.lemonade.price.sell;
export const selectBuyPrice = state => state.lemonade.price.buy;
export const selectSold = state => state.lemonade.sold;
export const selectBought = state => state.lemonade.bought;

export default lemonadeSlice.reducer;

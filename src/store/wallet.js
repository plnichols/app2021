import { createSlice } from '@reduxjs/toolkit';

// Slice
const wallet = createSlice({
  name: 'wallet',
  initialState: {
    currencies: [],
  },
  reducers: {
    loadSuccess: (state, action) => {
      state.currencies = action.payload;
    },
    incrementSuccess: (state, action) => {
      state.currencies = state.currencies.map((currency) => {
        if (currency.name === action.payload.name) {
          return {
            ...currency,
            amount: parseFloat(currency.amount + action.payload.amount),
          };
        }

        return currency;
      });
    },
    decrementSuccess: (state, action) => {
      state.currencies = state.currencies.map((currency) => {
        if (currency.name === action.payload.name) {
          return {
            ...currency,
            amount: parseFloat(currency.amount - action.payload.amount),
          };
        }

        return currency;
      });
    },
  },
});

export default wallet.reducer;

// Actions
const { loadSuccess, incrementSuccess, decrementSuccess } = wallet.actions;

export const load = () => async (dispatch) => {
  try {
    // link doesn't work anymore
    // const res = await fetch('https://demo9104838.mockable.io/currencies', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // });

    const json = [
      {
        name: 'GBP',
        symbol: '£',
        amount: 1600,
      },
      {
        name: 'EUR',
        symbol: '€',
        amount: 400,
      },
      {
        name: 'USD',
        symbol: '$',
        amount: 800,
      },
    ];
    dispatch(loadSuccess(json));
  } catch (e) {
    console.log(e);
    return console.error(e.message);
  }
};

export const increment = (name, amount) => async (dispatch) => {
  try {
    dispatch(incrementSuccess({ name, amount }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const decrement = (name, amount) => async (dispatch) => {
  try {
    dispatch(decrementSuccess({ name, amount }));
  } catch (e) {
    return console.error(e.message);
  }
};

import axios from 'axios';

const GET_COINS_DATA = 'CryptoCapstoneProject/coins/GET_COINS_DATA';
const COIN_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1';

const initialState = [];

export const getCoins = (payload) => ({
  type: GET_COINS_DATA,
  payload,
});

export const getCoinsFromAPI = () => async (dispatch) => {
  const res = await axios.get(COIN_URL);
  dispatch(getCoins(res.data));
};

const coinsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_COINS_DATA:
      return [...actions.payload];
    default:
      return state;
  }
};

export default coinsReducer;

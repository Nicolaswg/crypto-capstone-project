import coinsReducer from '../Redux/Coins/coins';

describe('Testing Get Coins in coinsReducer', () => {
  test('testing action state', () => {
    const state = [
      { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
      { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
    ];

    const GET_COINS_DATA = 'CryptoCapstoneProject/coins/GET_COINS_DATA';
    const action = { type: GET_COINS_DATA, payload: state };

    const result = coinsReducer([], action);
    expect(result).toEqual(state);
  });
});

import React from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';
import CoinItem from './CoinItem';

const CoinList = ({ coinsData, search }) => {
  const filteredCoins = coinsData.filter((coin) => coin.name.toLowerCase()
    .includes(search.toLowerCase()));
  return (
    <ul className="coins-container flex">
      {filteredCoins.map((coin) => (
        <CoinItem
          id={coin.id}
          name={coin.name}
          image={coin.image}
          value={coin.current_price}
          key={uuid()}
        />
      ))}
    </ul>
  );
};

CoinList.propTypes = {
  coinsData: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.string.isRequired,
};
export default CoinList;

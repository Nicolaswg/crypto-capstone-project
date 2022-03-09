import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import CoinItem from './CoinItem';

const CoinList = () => {
  const coinsData = useSelector((state) => state.coinsReducer);

  return (
    <ul className="coins-container flex">
      {coinsData.map((coin) => (
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

export default CoinList;

import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import CoinItem from './CoinItem';

const CoinList = () => {
  const coinsData = useSelector((state) => state.coinsReducer);
  console.log(coinsData);

  return (
    <div className="coins-container">
      {coinsData.map((coin) => (
        <CoinItem
          id={coin.id}
          name={coin.name}
          image={coin.image}
          value={coin.current_price}
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default CoinList;

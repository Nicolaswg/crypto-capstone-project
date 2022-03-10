import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CoinList from './CoinList';

const CoinSearch = () => {
  const [search, setSearch] = useState('');
  const coinsData = useSelector((state) => state.coinsReducer);
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="header flex">
        <div className="flex-a flex">
          <h1>Crypto Coins</h1>
        </div>
        <div className="flex-a flex">
          <input
            type="text"
            placeholder="type your crypto"
            value={search}
            onChange={onSearchChange}
            onBlur={onSearchChange}
          />
        </div>
      </div>
      <CoinList coinsData={coinsData} search={search} />
    </>
  );
};

export default CoinSearch;

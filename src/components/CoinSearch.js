import React, { useState } from 'react';

const CoinSearch = () => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
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
  );
};

export default CoinSearch;

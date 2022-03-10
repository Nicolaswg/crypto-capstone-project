import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Async = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
      setCoin(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul data-testid="list">
        {coin.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;

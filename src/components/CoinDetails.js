import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CoinDetails = () => {
  const { id } = useParams();
  const coinsData = useSelector((state) => state.coinsReducer);
  console.log(id);
  return (
    <div>CoinDetails</div>
  );
};

export default CoinDetails;

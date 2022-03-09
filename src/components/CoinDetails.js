import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { v4 as uuid } from 'uuid';
import CoinItem from './CoinItem';

const CoinDetails = () => {
  const { id } = useParams();
  const coinsData = useSelector((state) => state.coinsReducer);
  const currentCoin = coinsData.filter((state) => state.id === id);
  const filterCoins = coinsData.filter((state) => state.id !== id);
  return (
    <>
      <div className="detail-container flex">
        <div className="card-detail flex">
          <div className="card-detail-header flex">
            <img src={currentCoin[0].image} alt="img" />
            <ul className="list-details flex">
              <li>
                <div className="detail flex">
                  <h4>Crypto Name:</h4>
                  <p>{currentCoin[0].name}</p>
                </div>
              </li>
              <li>
                <div className="detail flex">
                  <h4>Crypto Symbol:</h4>
                  <p>{currentCoin[0].symbol.toUpperCase()}</p>
                </div>
              </li>
              <li>
                <div className="detail flex">
                  <h4>Price change:</h4>
                  <p
                    className={
                      currentCoin[0].price_change_percentage_24h > 0 ? 'price-up' : 'price-down'
                    }
                  >
                    {`${currentCoin[0].price_change_percentage_24h} %`}
                  </p>
                </div>
              </li>
              <li>
                <div className="detail flex">
                  <h4>Current price in USD:</h4>
                  <p>{`${currentCoin[0].current_price} $`}</p>
                </div>
              </li>
              <li>
                <div className="detail flex">
                  <h4>Market Position:</h4>
                  <p>{`#${currentCoin[0].market_cap_rank}`}</p>
                </div>
              </li>
              <li>
                <div className="detail flex">
                  <Link to="/" className="detail-btn">
                    Go Back
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="coins-container flex">
        {filterCoins.map((coin) => (
          <CoinItem
            id={coin.id}
            name={coin.name}
            image={coin.image}
            value={coin.current_price}
            key={uuid()}
          />
        ))}
      </ul>
    </>
  );
};

export default CoinDetails;

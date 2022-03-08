import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CoinItem = (props) => {
  const {
    id,
    name,
    image,
    value,
  } = props;

  return (
    <li className="coin-card flex">
      <Link
        to={`/coindetails/${id}`}
        className="card flex"
      >
        <img src={image} alt="coin-img" />
        <div className="coin-info flex">
          <p className="coin-name">{name}</p>
          <p className="coin-value">{`${value} $`}</p>
        </div>
      </Link>
    </li>
  );
};

CoinItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CoinItem;

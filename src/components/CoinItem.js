import React from 'react';
import { PropTypes } from 'prop-types';

const CoinItem = (props) => {
  const {
    id,
    name,
    image,
    value,
  } = props;

  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
      <li><img src={image} alt="img" /></li>
      <li>{value}</li>
    </ul>
  );
};

CoinItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CoinItem;

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { PropTypes } from 'prop-types';
// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from '../Redux/Coins/coins';

const reducer = combineReducers({
  coinReducer,
});

function render(
  ui, {
    preloadedState,
    store = createStore(reducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>{children}</Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.objectOf(String).isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// export
export * from '@testing-library/react';
export { render };

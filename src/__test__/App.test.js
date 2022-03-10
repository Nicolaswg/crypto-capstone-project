import React from 'react';
import {
  waitFor, render, screen,
} from './test-utils';
import App from '../App';
import '@testing-library/jest-dom';

it('App components render correctly', async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText('Crypto Coins'));
  expect(container).toMatchSnapshot();
});

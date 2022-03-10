import React from 'react';
import {
  waitFor, render, fireEvent, screen,
} from './test-utils';
import App from '../App';
import '@testing-library/jest-dom';

it('App components render correctly', async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText('Crypto Coins'));
  expect(container).toMatchSnapshot();
});

it('Click on a link renderer properly', async () => {
  render(<App />);
  await waitFor(() => screen.getByText('Bitcoin'));
  fireEvent.click(screen.getByText('Bitcoin'));
  expect(screen.getByText('Crypto Name:')).toBeInTheDocument();
});

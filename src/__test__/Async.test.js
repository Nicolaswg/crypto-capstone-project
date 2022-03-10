import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import axios from 'axios';
import Async from './mock/Async';

jest.mock('axios');

afterEach(cleanup);

it('renders Async correctly', async () => {
  axios.get.mockResolvedValue([
    { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
    { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
  ]);
  const { getByTestId, asFragment } = render(<Async />);

  const listNode = await waitFor(() => getByTestId('list'));
  expect(listNode.children).toHaveLength(2);
  expect(asFragment()).toMatchSnapshot();
});

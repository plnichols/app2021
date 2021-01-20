import React from 'react';
import { render, screen } from '@testing-library/react';
import Currency from '../Currency';

test('Currency', () => {
  render(<Currency name="USD" symbol="$" amount={100} />);
  expect(screen.getByText('USD')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Currency from '../Currency';

// need to mock redux store before enabling these tests
xtest('Currency', () => {
  render(<Currency name="USD" symbol="$" amount={100} />);
  expect(screen.getByText('USD')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});

xtest('Currency buttons', () => {
  render(<Currency name="USD" symbol="$" amount={100} />);
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});

xtest('Currency button action', () => {
  // render(<Currency name="USD" symbol="$" amount={100} />);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Wallet from '../Wallet';

xtest('Wallet', () => {
  // need to mock the redux store
  render(<Wallet title="Title" subtitle="Subtitle" />);
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Subtitle')).toBeInTheDocument();
});

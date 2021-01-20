import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header', () => {
  render(<Header title="Title" />);
  expect(screen.getByText('Title')).toBeInTheDocument();
});

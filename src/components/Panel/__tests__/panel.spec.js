import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '../Panel';

test('Panel', () => {
  render(<Panel>Lorem ipsum</Panel>);
  expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
});

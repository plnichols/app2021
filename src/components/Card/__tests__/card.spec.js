import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('Card', () => {
  render(<Card title="Title" subtitle="Subtitle" />);
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Subtitle')).toBeInTheDocument();
});

test('Card with children content', () => {
  render(<Card title="Title">Lorem ipsum</Card>);
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.queryByText('Subtitle')).not.toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
});

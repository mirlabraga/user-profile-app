import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders Home in menu', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});


test('renders Profile in menu', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText("Profile");
  expect(linkElement).toBeInTheDocument();
});

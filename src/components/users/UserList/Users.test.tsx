import React from 'react';
import { render } from '@testing-library/react';
import Users from './Users';

test('renders Users information', () => {
  const { getByText } = render(<Users />);
  const linkElement = getByText("Cancel");
  expect(linkElement).toBeInTheDocument();
});

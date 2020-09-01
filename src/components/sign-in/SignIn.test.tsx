import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';

test('renders Sign in information', () => {
  const { getByText } = render(<SignIn />);
  const linkElement = getByText("Sign in");
  expect(linkElement).toBeInTheDocument();
});


test('renders Sign in information', () => {
  const { getByText } = render(<SignIn />);
  const linkElement = getByText("Remember me");
  expect(linkElement).toBeInTheDocument();
});

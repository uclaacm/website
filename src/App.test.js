import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders our email', () => {
  // extremely trivial smoke test; should resolve later!
  const { getByText } = render(<App />);
  const linkElement = getByText(/acm@ucla.edu/i);
  expect(linkElement).toBeInTheDocument();
});

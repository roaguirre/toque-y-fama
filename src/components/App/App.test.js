import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Comenzar button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Comenzar");
  expect(linkElement).toBeInTheDocument();
});
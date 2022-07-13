import { render, screen } from '@testing-library/react';
import React from 'react';
import LoginComponent from './index';

test('Should render Login Component', () => {
  render(<LoginComponent validateUser={(): void => { console.log('Validate user'); }} />);

  const linkElement = screen.getByText(/Hack Ideas/i);
  expect(linkElement).toBeInTheDocument();
});

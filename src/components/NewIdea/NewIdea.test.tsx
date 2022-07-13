import { render, screen } from '@testing-library/react';
import React from 'react';
import NewIdeaComponent from './index';

test('Should render NewIdea Component', () => {
  render(<NewIdeaComponent addIdea={(): void => console.log('add new idea')} />);

  const titleElement = screen.getByText(/Title should be minimum 5 and maximum 50 character/i);
  expect(titleElement).toBeInTheDocument();
});

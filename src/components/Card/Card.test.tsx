import { render, screen } from '@testing-library/react';
import React from 'react';
import CardComponent from './index';

test('Should render Card Component', () => {
  const idea = {
    'id': 'eafa9bf5-e974-40e3-a81b-33ffa8ba0f96',
    'createdAt': '2022-07-08T01:28:09',
    'description': 'Praesent blandit. Nam nulla.',
    'dislikeCount': 216,
    'likeCount': 462,
    'tags': [
      'Backend',
      'healthTech',
      'tech'
    ],
    'title': 'Storm Center',
    'userName': 'Eugene Sarrell',
    'userPhoto': 'https://randomwordgenerator.com/img/picture-generator/ice-cream-cone-1274894_640.jpg'
  };

  render(<CardComponent idea={idea} updateVote={(): void => { console.log('update the votes'); }} />);

  const ideaTitle = screen.getByText(/Storm Center/i);
  expect(ideaTitle).toBeInTheDocument();

  const ideaDescription = screen.getByText(/Praesent blandit. Nam nulla./i);
  expect(ideaDescription).toBeInTheDocument();

  const likeCount = screen.getByText(/462/i);
  expect(likeCount).toBeInTheDocument();

  const dislikeCount = screen.getByText(/216/i);
  expect(dislikeCount).toBeInTheDocument();
});

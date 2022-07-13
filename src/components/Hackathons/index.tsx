import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { HackathonIdea } from '../../HackathonsContainer';
import CardComponent from '../Card';
import NewIdeaComponent from '../NewIdea';

import './index.scss';

enum ComponentsToShow {
  NEW_IDEA = 'newIdea',
  CURRENT_HACKATHONS = 'current'
}

export default function HackathonsComponent(props: { hackIdeas: HackathonIdea[] }): JSX.Element {
  const [componentsToShow, setComponentsToShow] = useState<ComponentsToShow>(ComponentsToShow.CURRENT_HACKATHONS);
  const [hackIdeas, setHackIdeas] = useState<HackathonIdea[]>([]);

  useEffect(() => {
    setHackIdeas(props.hackIdeas);
  }, [props.hackIdeas]);

  function updateIdea(updatedHackIdea: HackathonIdea): void {
    let foundIdeaIndex = -1;
    hackIdeas.find((idea, index) => {
      if (idea.id === updatedHackIdea.id) {
        foundIdeaIndex = index;
      }
    });

    hackIdeas[foundIdeaIndex] = updatedHackIdea;
  }

  function sortByLikeVotes(): void {
    setHackIdeas([...hackIdeas.sort((a, b) => a.likeCount < b.likeCount ? 1 : -1)]);
  }

  function sortByDislikeVotes(): void {
    setHackIdeas([...hackIdeas.sort((a, b) => a.dislikeCount < b.dislikeCount ? 1 : -1)]);
  }

  function sortByCreatedDateVotes(): void {
    setHackIdeas([...hackIdeas.sort((a, b) => moment(b.createdAt).diff(a.createdAt))]);
  }

  function addIdea(title: string, description: string, tag: string): void {
    hackIdeas.push({
      createdAt: '2023-07-08T01:28:09',
      description: description,
      dislikeCount: 0,
      likeCount: 0,
      tags: [tag],
      title: title,
      userName: 'new user',
      userPhoto: 'some url',
      id: hackIdeas.length.toString()
    });
    setHackIdeas([...hackIdeas]);
  }

  return (
    <div className='hackathons-container'>
      <div className='hackathons-container__sidebar'>
        <button
          className='hackathons-container__button'
          onClick={(): void => setComponentsToShow(ComponentsToShow.CURRENT_HACKATHONS)}>
          Hackathons
        </button>
        {
          componentsToShow === ComponentsToShow.CURRENT_HACKATHONS &&
          <div className='hackathons-container__sort-container'>
            <li className='hackathons-container__sort-container__sort' onClick={sortByLikeVotes}>
              Sort by like votes <i className='bi bi-sort-down'></i>
            </li>
            <li className='hackathons-container__sort-container__sort' onClick={sortByDislikeVotes}>
              Sort by dislike votes <i className='bi bi-sort-down-alt'></i>
            </li>
            <li className='hackathons-container__sort-container__sort' onClick={sortByCreatedDateVotes}>
              Sort by date created
            </li>
          </div>
        }
        <button
          className='hackathons-container__button'
          onClick={(): void => setComponentsToShow(ComponentsToShow.NEW_IDEA)}>
          New Hackathons
        </button>
      </div>

      <div className='hackathons-container__ideas'>
        {
          componentsToShow === ComponentsToShow.NEW_IDEA &&
          <NewIdeaComponent addIdea={addIdea} />
        }

        {
          componentsToShow === ComponentsToShow.CURRENT_HACKATHONS &&
          <>
            {
              hackIdeas.map(idea => (
                <CardComponent
                  key={idea.id}
                  idea={idea}
                  updateVote={updateIdea}
                />
              ))
            }
          </>
        }
      </div>
    </div>
  );
}
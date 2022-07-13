import React, { useState } from 'react';
import moment from 'moment';
import { HackathonIdea } from '../../HackathonsContainer';

import './index.scss';

interface Props {
  idea: HackathonIdea;
  updateVote: Function;
}

export default function Card(props: Props): JSX.Element {
  const [showDislikeOverlay, setShowDislikeOverlay] = useState<boolean>(false);
  const [showLikeOverlay, setShowLikeOverlay] = useState<boolean>(false);
  let notificationTimer: ReturnType<typeof setTimeout>;

  function resetNotification(): void {
    clearTimeout(notificationTimer);
    notificationTimer = setTimeout(() => {
      setShowDislikeOverlay(false);
      setShowLikeOverlay(false);
    }, 250);
  }

  return (
    <div className='card-container'>
      <div className='card'>
        <h5 className='card__title'>{props.idea.title}</h5>
        <p className='card__desc'>{props.idea.description}</p>

        <div className='card__tags'>
          {
            props.idea.tags.map((tag, index) => (
              <div className='card__tag' key={index}>{tag}</div>
            ))
          }
        </div>
        <div className='card__user'>
          <div className='card__user__icon'>
            <img src={props.idea.userPhoto} alt='' />
          </div>
          <div className='card__user-details'>
            <div className='card__user__name'>
              {props.idea.userName}
            </div>
            <div className='card__user__time'>
              {moment(props.idea.createdAt).fromNow()}
            </div>
          </div>
          <div className='card__vote'>
            <div className='card__vote__container'>
              <i
                className='bi bi-hand-thumbs-up card__vote__icon'
                onClick={(): void => {
                  setShowLikeOverlay(true);
                  resetNotification();
                  props.idea.likeCount++;
                  props.updateVote(props.idea);
                }}
              />
              <div className='card__vote__count'>
                {props.idea.likeCount}
              </div>
            </div>
            <div className='card__vote__container'>
              <i
                className='bi bi-hand-thumbs-down card__vote__icon'
                onClick={(): void => {
                  setShowDislikeOverlay(true);
                  resetNotification();
                  props.idea.dislikeCount++;
                  props.updateVote(props.idea);
                }}
              />
              <div className='card__vote__count'>
                {props.idea.dislikeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`card-overlay-like card ${showLikeOverlay ? 'show' : ''}`} >
        <i className='bi bi-hand-thumbs-up card__vote__icon' />
      </div>
      <div className={`card-overlay-dislike card ${showDislikeOverlay ? 'show' : ''} `} >
        <i className='bi bi-hand-thumbs-down card__vote__icon' />
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './index.scss';

export default function NewIdea(props: { addIdea: Function }): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tag, setTag] = useState<string>('tech');

  return (
    <div className='idea_container'>
      <div className='idea_container__form'>
        <form>
          <div>
            <label>Title</label>
            <div className='idea_container__sub-title'>
              Title should be minimum 5 and maximum 50 character
            </div>
            <input
              type='text'
              className='form-control'
              value={title}
              onChange={(event): void => setTitle(event.target.value)}
            />
            <br />
            <label>Description</label>
            <div className='idea_container__sub-title'>
              Description should be minimum 5 and maximum 500 character
            </div>
            <textarea
              className='form-control'
              value={description}
              onChange={(event): void => setDescription(event.target.value)}
            />
          </div>
          <br />
          <label>Tag</label>
          <select className='form-select' value={tag} onChange={(event): void => setTag(event.target.value)}>
            <option value='tech'>Tech</option>
            <option value='feature'>Feature</option>
            <option value='science'>Science</option>
          </select>
          <br />
          <button
            type='submit'
            className='btn btn-primary'
            onClick={(event): void => {
              event.stopPropagation();
              event.preventDefault();
              props.addIdea(title, description, tag);
              setTitle('');
              setDescription('');
            }}
          >
            Submit Idea <i className='bi bi-lightbulb-fill'></i>
          </button>
        </form>
      </div>
    </div>
  );
}
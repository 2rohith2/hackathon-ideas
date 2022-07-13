import React, { useState } from 'react';
import BannerImage from '../../assests/3characters.png';
import './index.scss';

interface Props {
  validateUser: Function;
}

export default function LoginComponent(props: Props): JSX.Element {
  const [employeeId, setEmployeeId] = useState<string>('');

  return (
    <div className='login_container'>
      <div className='login_container__form'>
        <div>
          <div className='login_container__header'>
            Hack Ideas
          </div>
          <div className='login_container__title'>
            Join the community challenges for internal hackathons which is organised every month.
          </div>

          <form>
            <div className='login_container__login'>
              <label>Employee Id</label>
              <input
                type='text'
                className='form-control'
                onChange={(event):void => setEmployeeId(event.target.value)}
              />
              <small className='form-text text-muted'>Login with Employee ID</small>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={(event): void => {
                event.stopPropagation();
                event.preventDefault();
                props.validateUser(employeeId);
              }}
            >
              Login <i className='bi bi-box-arrow-in-right' />
            </button>
          </form>
        </div>
        <img className='login_container--banner' src={BannerImage} alt='' />
      </div>
    </div>
  );
}
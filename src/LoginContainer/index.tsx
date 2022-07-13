import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/Login';

export default function LoginContainer(): JSX.Element {
  const navigate = useNavigate();

  async function login(employeeId: string): Promise<void> {
    try {
      /**
       * Code to hit API call to validate employee id
       */

      // const response = await (await fetch('USERS_API_URL', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ employeeId: employeeId })
      // })).json();

      navigate('/hackathons');

    } catch (error) {
      console.log('unable to fetch the data');
    }
  }

  return (
    <>
      <LoginComponent validateUser={login} />
    </>
  );
}
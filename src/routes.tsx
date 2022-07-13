import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import HackathonsContainer from './HackathonsContainer';

export default function he(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/hackathons' element={<HackathonsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
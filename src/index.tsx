import * as React from 'react';
import Routes from './routes';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);